const fs = require('fs');
const html = fs.readFileSync('/tmp/cwv.html', 'utf-8');

// Get description from meta
const descMatch = html.match(/<meta[^>]*name="description"[^>]*content="([^"]+)"/);
const description = descMatch ? descMatch[1] : '';

// Get category from breadcrumb or tag
const catMatch = html.match(/Technisches SEO|OffPage SEO|OnPage SEO|Content|KI-Suche|SEO-Tools|Linkbuilding/);
const category = catMatch ? catMatch[0] : 'SEO';

// Extract main content
const contentMatch = html.match(/(<h2>Was sind Core Web Vitals\?<\/h2>)([\s\S]*?)(<h2[^>]*>Ähnliche Beiträge<\/h2>)/);
if (!contentMatch) { console.log('NO CONTENT MATCH'); process.exit(1); }

let text = contentMatch[1] + contentMatch[2];

// HTML to Markdown
text = text.replace(/<h2[^>]*>(.*?)<\/h2>/g, '\n## $1\n');
text = text.replace(/<h3[^>]*>(.*?)<\/h3>/g, '\n### $1\n');
text = text.replace(/<h4[^>]*>(.*?)<\/h4>/g, '\n#### $1\n');
text = text.replace(/<li[^>]*>([\s\S]*?)<\/li>/g, '- $1\n');
text = text.replace(/<strong>(.*?)<\/strong>/g, '**$1**');
text = text.replace(/<em>(.*?)<\/em>/g, '*$1*');
text = text.replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/g, '[$2]($1)');
text = text.replace(/<br\s*\/?>/g, '\n');
text = text.replace(/<p[^>]*>([\s\S]*?)<\/p>/g, '$1\n\n');
text = text.replace(/<[^>]+>/g, '');
text = text.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
text = text.replace(/&quot;/g, '"').replace(/&#8211;/g, '–').replace(/&#8222;/g, '„');
text = text.replace(/&#8220;/g, '\u201C').replace(/&#8221;/g, '\u201D');
text = text.replace(/&#\d+;/g, '');
text = text.replace(/\n{3,}/g, '\n\n').trim();

// Get intro (first paragraph before first H2 in content area)
const introMatch = html.match(/<div[^>]*class="[^"]*brxe-text-basic[^"]*"[^>]*>([\s\S]*?)<\/div>/);
let intro = '';
if (introMatch) {
  intro = introMatch[1].replace(/<[^>]+>/g, '').trim();
}

console.log('=== DESCRIPTION ===');
console.log(description);
console.log('\n=== CATEGORY ===');
console.log(category);
console.log('\n=== INTRO ===');
console.log(intro);
console.log('\n=== CONTENT ===');
console.log(text);
