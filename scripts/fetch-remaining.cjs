const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'content', 'lexikon');
const AUTHOR = `  name: "André Schäfer"
  role: "Geschäftsführer & SEO-Stratege"
  bio: "André Schäfer (*1990, Kronach) ist Gründer der sagemedia GmbH in Bad Staffelstein. Ehemaliger E-Sportler (n!faculty, deutsches Nationalteam) und seit 2009 im SEO tätig. 2021 gewann er den deutschen SEO-Contest, 2022 Top-5 beim SommerSEO. Sein Fokus: datengetriebene SEO-Strategien mit Branchenexklusivität."
  image: "/images/andre-schaefer-stage.jpg"`;

const SLUGS = [
  { slug: 'sichtbarkeitsindex', cat: 'SEO-Tools' },
  { slug: 'majestic-seo', cat: 'SEO-Tools' },
  { slug: 'semantik', cat: 'OnPage SEO' },
  { slug: 'sitemap', cat: 'Technisches SEO' },
];

function fetch(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetch(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on('data', d => chunks.push(d));
      res.on('end', () => resolve(Buffer.concat(chunks).toString()));
    });
    req.on('error', reject);
    req.setTimeout(15000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

function extractContent(html) {
  // Title from h1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
  let title = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+20(2[0-9])\s*$/, '').trim() : '';

  // Description from meta
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/);
  const description = descMatch ? descMatch[1].replace(/"/g, '\\"') : '';

  // Find first content H2 (may contain <strong>)
  const firstH2Match = html.match(/<h2><strong>(.*?)<\/strong><\/h2>/);
  if (!firstH2Match) return null;

  const firstH2Text = firstH2Match[1];
  const escaped = firstH2Text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  // Extract content from first H2 to "Ähnliche Beiträge"
  const regex = new RegExp(`(<h2><strong>${escaped}<\\/strong><\\/h2>)([\\s\\S]*?)(<h2[^>]*>Ähnliche Beiträge<\\/h2>)`, 's');
  const match = html.match(regex);
  if (!match) return null;

  let text = match[1] + match[2];

  // Convert H2 with strong
  text = text.replace(/<h2><strong>(.*?)<\/strong><\/h2>/g, '\n## $1\n');
  text = text.replace(/<h2[^>]*>(.*?)<\/h2>/g, '\n## $1\n');
  text = text.replace(/<h3[^>]*>([\s\S]*?)<\/h3>/g, (_, inner) => '\n### ' + inner.replace(/<[^>]+>/g, '') + '\n');
  text = text.replace(/<h4[^>]*>([\s\S]*?)<\/h4>/g, (_, inner) => '\n#### ' + inner.replace(/<[^>]+>/g, '') + '\n');

  // Tables
  text = text.replace(/<table[\s\S]*?<\/table>/g, (table) => {
    const rows = [];
    const trRegex = /<tr[^>]*>([\s\S]*?)<\/tr>/g;
    let tr;
    while ((tr = trRegex.exec(table)) !== null) {
      const cells = [];
      const tdRegex = /<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g;
      let td;
      while ((td = tdRegex.exec(tr[1])) !== null) {
        cells.push(td[1].replace(/<[^>]+>/g, '').trim());
      }
      rows.push(cells);
    }
    if (rows.length === 0) return '';
    let md = '\n| ' + rows[0].join(' | ') + ' |\n';
    md += '|' + rows[0].map(() => '---').join('|') + '|\n';
    for (let i = 1; i < rows.length; i++) {
      md += '| ' + rows[i].join(' | ') + ' |\n';
    }
    return md;
  });

  text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, '- $1\n');
  text = text.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
  text = text.replace(/<em>(.*?)<\/em>/g, '*$1*');
  text = text.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, '[$2]($1)');
  text = text.replace(/<br\s*\/?>/g, '\n');
  text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, '$1\n\n');
  text = text.replace(/<[^>]+>/g, '');
  text = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
  text = text.replace(/&#8211;/g, '–').replace(/&#8212;/g, '—');
  text = text.replace(/&#8222;/g, '„').replace(/&#8220;/g, '"').replace(/&#8221;/g, '"');
  text = text.replace(/&#8216;/g, "'").replace(/&#8217;/g, "'");
  text = text.replace(/&#\d+;/g, '');
  text = text.replace(/\n{3,}/g, '\n\n').trim();
  text = text.replace(/\/\/\s*Select the elements[\s\S]*$/, '').trim();
  text = text.replace(/const \w+ = document[\s\S]*$/, '').trim();

  return { title, description, body: text };
}

async function main() {
  for (const { slug, cat } of SLUGS) {
    try {
      const html = await fetch(`https://www.sagemedia.de/lexikon/${slug}/`);
      const result = extractContent(html);
      if (!result) { console.log(`FAIL ${slug}`); continue; }

      const md = `---
title: "${result.title}"
category: "${cat}"
description: "${result.description}"
author:
${AUTHOR}
related: []
---

${result.body}
`;
      fs.writeFileSync(path.join(OUTPUT_DIR, `${slug}.md`), md, 'utf-8');
      console.log(`OK   ${slug} (${result.title})`);
    } catch (err) {
      console.log(`ERR  ${slug}: ${err.message}`);
    }
  }
}

main();
