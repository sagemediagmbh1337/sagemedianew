const https = require('https');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, '..', 'src', 'content', 'lexikon');

const AUTHOR = `  name: "André Schäfer"
  role: "Geschäftsführer & SEO-Stratege"
  bio: "André Schäfer (*1990, Kronach) ist Gründer der sagemedia GmbH in Bad Staffelstein. Ehemaliger E-Sportler (n!faculty, deutsches Nationalteam) und seit 2009 im SEO tätig. 2021 gewann er den deutschen SEO-Contest, 2022 Top-5 beim SommerSEO. Sein Fokus: datengetriebene SEO-Strategien mit Branchenexklusivität."
  image: "/images/andre-schaefer-stage.jpg"`;

// All URLs from sitemap (excluding index and already done ones)
const URLS = [
  'microsoft-copilot', 'bing', 'yahoo', 'ecosia', 'duckduckgo', 'perplexity',
  'gemini', 'claude', 'chatgpt', 'generative-engine-optimization-geo', 'entitaeten',
  'topical-authority', 'google-merchant-center', 'ahrefs', 'suchintention',
  'transaktionale-suchanfrage', 'navigationale-suchanfrage', 'suchanfrage', 'sistrix',
  'suchvolumen', 'html', 'rankbrain', 'cloaking', 'citation-flow', 'broken-link',
  'bert', 'alt-text', 'sichtbarkeitsindex', 'meta-description', 'relaunch',
  'retrieval-augmented-generation', 'large-language-models', 'se-ranking', 'semantik',
  'majestic-seo', 'link-exchange', 'page-authority', 'keyword-density',
  'longtail-keywords', 'google-sandbox', 'impression', 'muvera', 'andre-schaefer',
  'volltext-suchmaschine', 'kyle-roof', 'serp', 'bill-slawski', 'indexierung',
  'content', 'yandex', 'google-patents', 'duplicate-content', 'trust-flow',
  'pagerank', 'robots-txt', 'meta-tags', 'keywords', 'evergreen-content',
  'content-silos', 'shortlinks', 'sitemap'
];

// Category detection based on content/URL patterns
function detectCategory(slug, html) {
  const catMap = {
    'microsoft-copilot': 'KI-Suche', 'bing': 'Suchmaschinen', 'yahoo': 'Suchmaschinen',
    'ecosia': 'Suchmaschinen', 'duckduckgo': 'Suchmaschinen', 'perplexity': 'KI-Suche',
    'gemini': 'KI-Suche', 'claude': 'KI-Suche', 'chatgpt': 'KI-Suche',
    'generative-engine-optimization-geo': 'KI-Suche', 'entitaeten': 'OnPage SEO',
    'topical-authority': 'Content', 'google-merchant-center': 'SEO-Tools',
    'ahrefs': 'SEO-Tools', 'suchintention': 'OnPage SEO',
    'transaktionale-suchanfrage': 'OnPage SEO', 'navigationale-suchanfrage': 'OnPage SEO',
    'suchanfrage': 'OnPage SEO', 'sistrix': 'SEO-Tools', 'suchvolumen': 'OnPage SEO',
    'html': 'Technisches SEO', 'rankbrain': 'Suchmaschinen', 'cloaking': 'Technisches SEO',
    'citation-flow': 'OffPage SEO', 'broken-link': 'Technisches SEO', 'bert': 'Suchmaschinen',
    'alt-text': 'OnPage SEO', 'sichtbarkeitsindex': 'SEO-Tools',
    'meta-description': 'OnPage SEO', 'relaunch': 'Technisches SEO',
    'retrieval-augmented-generation': 'KI-Suche', 'large-language-models': 'KI-Suche',
    'se-ranking': 'SEO-Tools', 'semantik': 'OnPage SEO', 'majestic-seo': 'SEO-Tools',
    'link-exchange': 'OffPage SEO', 'page-authority': 'OffPage SEO',
    'keyword-density': 'OnPage SEO', 'longtail-keywords': 'OnPage SEO',
    'google-sandbox': 'Suchmaschinen', 'impression': 'SEO-Tools', 'muvera': 'KI-Suche',
    'andre-schaefer': 'SEO', 'volltext-suchmaschine': 'Suchmaschinen',
    'kyle-roof': 'SEO', 'serp': 'Suchmaschinen', 'bill-slawski': 'SEO',
    'indexierung': 'Technisches SEO', 'content': 'Content', 'yandex': 'Suchmaschinen',
    'google-patents': 'Suchmaschinen', 'duplicate-content': 'OnPage SEO',
    'trust-flow': 'OffPage SEO', 'pagerank': 'OffPage SEO', 'robots-txt': 'Technisches SEO',
    'meta-tags': 'OnPage SEO', 'keywords': 'OnPage SEO', 'evergreen-content': 'Content',
    'content-silos': 'Content', 'shortlinks': 'Technisches SEO', 'sitemap': 'Technisches SEO'
  };
  return catMap[slug] || 'SEO';
}

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

function extractContent(html, slug) {
  // Title from h1
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/s);
  let title = h1Match ? h1Match[1].replace(/<[^>]+>/g, '').trim() : slug;
  // Remove year suffixes like "2025" or "2026"
  title = title.replace(/\s+20(2[0-9])\s*$/, '').trim();

  // Description from meta
  const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/);
  const description = descMatch ? descMatch[1].replace(/"/g, '\\"') : '';

  // Find all H2s in content (not sidebar/footer)
  const h2s = [];
  const h2Regex = /<h2>([^<]+)<\/h2>/g;
  let m;
  while ((m = h2Regex.exec(html)) !== null) h2s.push(m[1]);

  if (h2s.length === 0) return null;

  // Extract content between first content H2 and "Ähnliche Beiträge"
  const firstH2 = h2s[0].replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const contentRegex = new RegExp(`(<h2>${firstH2}<\\/h2>)([\\s\\S]*?)(<h2[^>]*>Ähnliche Beiträge<\\/h2>)`, 's');
  const contentMatch = html.match(contentRegex);

  if (!contentMatch) {
    // Try without "Ähnliche Beiträge" - take until sidebar
    const altRegex = new RegExp(`(<h2>${firstH2}<\\/h2>)([\\s\\S]*?)(<h2[^>]*class="brxe-heading)`, 's');
    const altMatch = html.match(altRegex);
    if (!altMatch) return null;
    var rawContent = altMatch[1] + altMatch[2];
  } else {
    var rawContent = contentMatch[1] + contentMatch[2];
  }

  // HTML to Markdown conversion
  let text = rawContent;
  text = text.replace(/<h2[^>]*>(.*?)<\/h2>/g, '\n## $1\n');
  text = text.replace(/<h3[^>]*>(.*?)<\/h3>/g, '\n### $1\n');
  text = text.replace(/<h4[^>]*>(.*?)<\/h4>/g, '\n#### $1\n');

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

  // HTML entities
  text = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  text = text.replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ');
  text = text.replace(/&#8211;/g, '–').replace(/&#8212;/g, '—');
  text = text.replace(/&#8222;/g, '„').replace(/&#8220;/g, '"').replace(/&#8221;/g, '"');
  text = text.replace(/&#8216;/g, "'").replace(/&#8217;/g, "'");
  text = text.replace(/&#\d+;/g, '');

  // Clean up
  text = text.replace(/\n{3,}/g, '\n\n').trim();

  // Remove any trailing JS that might have leaked in
  text = text.replace(/\/\/\s*Select the elements[\s\S]*$/, '').trim();
  text = text.replace(/const \w+ = document[\s\S]*$/, '').trim();

  // Extract intro (text before first ## in the body)
  const introMatch = text.match(/^([\s\S]*?)(\n## )/);
  let intro = '';
  let body = text;
  if (introMatch && introMatch[1].trim()) {
    intro = introMatch[1].trim();
    // Keep the intro as part of the body for the markdown file
  }

  return { title, description, body: text };
}

async function processSlug(slug) {
  const url = `https://www.sagemedia.de/lexikon/${slug}/`;
  const outFile = path.join(OUTPUT_DIR, `${slug}.md`);

  // Skip if already exists
  if (fs.existsSync(outFile)) {
    console.log(`SKIP ${slug} (exists)`);
    return 'skip';
  }

  try {
    const html = await fetch(url);
    const result = extractContent(html, slug);

    if (!result) {
      console.log(`FAIL ${slug} (no content match)`);
      return 'fail';
    }

    const category = detectCategory(slug, html);

    const frontmatter = `---
title: "${result.title}"
category: "${category}"
description: "${result.description}"
author:
${AUTHOR}
related: []
---`;

    const markdown = frontmatter + '\n\n' + result.body + '\n';
    fs.writeFileSync(outFile, markdown, 'utf-8');
    console.log(`OK   ${slug} (${result.title})`);
    return 'ok';
  } catch (err) {
    console.log(`ERR  ${slug}: ${err.message}`);
    return 'error';
  }
}

async function main() {
  console.log(`Processing ${URLS.length} entries...\n`);

  // Process in batches of 5
  const results = { ok: 0, skip: 0, fail: 0, error: 0 };
  for (let i = 0; i < URLS.length; i += 5) {
    const batch = URLS.slice(i, i + 5);
    const batchResults = await Promise.all(batch.map(processSlug));
    batchResults.forEach(r => results[r]++);
  }

  console.log(`\nDone: ${results.ok} created, ${results.skip} skipped, ${results.fail} failed, ${results.error} errors`);
}

main();
