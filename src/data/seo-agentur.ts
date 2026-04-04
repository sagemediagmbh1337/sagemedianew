/* ─────────────────────────────────────────────
   SEO-Agentur Page Data
   Shared across /seo-agentur/ and city/branch pages
   ───────────────────────────────────────────── */

export const seoFaqs = [
  { q: 'Was ist eine SEO-Agentur?', a: 'Eine SEO-Agentur (auch: Agentur für Suchmaschinenoptimierung) ist ein spezialisierter Dienstleister, der Websites optimiert, um in den organischen Suchergebnissen von Google besser gefunden zu werden. Dazu gehören technische Optimierung, Content-Erstellung, Keyword-Recherche, Linkbuilding und laufendes Monitoring der Rankings.' },
  { q: 'Was ist eine SEO-Firma?', a: 'SEO-Firma ist ein Synonym für SEO-Agentur. Beide Begriffe beschreiben ein Unternehmen, das sich auf Suchmaschinenoptimierung spezialisiert hat. Ob SEO-Firma, Internetagentur für SEO oder Werbeagentur mit SEO-Fokus — entscheidend sind nachweisbare Ergebnisse und eine transparente Arbeitsweise.' },
  { q: 'Was macht eine gute SEO-Agentur aus?', a: 'Eine gute SEO-Agentur arbeitet datengetrieben, transparent und strategisch. Sie versteht dein Geschäftsmodell, analysiert deinen Wettbewerb und entwickelt eine individuelle Strategie statt Schema-F-Lösungen. Entscheidend: nachweisbare Ergebnisse, klare KPIs und ein direkter Ansprechpartner.' },
  { q: 'Was kostet eine SEO-Agentur pro Monat?', a: 'Professionelle Suchmaschinenoptimierung beginnt in der Regel ab 2.000 EUR/Monat. Der genaue Invest hängt von Branche, Wettbewerb und Zielen ab. Vorsicht bei Angeboten unter 500 EUR — dort fehlen meist die Ressourcen für nachhaltige Google-Optimierung. Bei sagemedia besprechen wir den individuellen Invest im kostenlosen Erstgespräch.' },
  { q: 'Wie lange dauert es, bis SEO wirkt?', a: 'Erste Ranking-Verbesserungen zeigen sich nach 3–6 Monaten. Signifikante Ergebnisse wie Top-3-Rankings in umkämpften Branchen können 6–12 Monate dauern. Der Vorteil gegenüber Google Ads: Organischer Traffic ist nachhaltig und steigt langfristig.' },
  { q: 'SEO-Agentur oder Freelancer — was ist besser?', a: 'Freelancer sind oft günstiger, aber einer allein kann selten Technik, Content, Linkbuilding und Strategie auf Agenturniveau abdecken. Eine spezialisierte Web-Agentur für Suchmaschinenoptimierung bietet ein eingespieltes Team, professionelle Tools und erprobte Prozesse.' },
  { q: 'Woran erkenne ich unseriöse SEO-Agenturen?', a: 'Warnsignale: Ranking-Garantien ("Platz 1 in 30 Tagen"), fehlende Referenzen, keine transparenten Reports, billige Paketpreise ohne individuelle Analyse. Seriöse SEO-Dienstleister zeigen echte Case Studies, nennen konkrete KPIs und erklären ihre Methodik.' },
  { q: 'Was bedeutet Branchenexklusivität bei sagemedia?', a: 'Wir betreuen pro Branche und Region genau einen Kunden. Deine Keywords, Content-Strategie und Backlinks werden nie gleichzeitig für deinen Wettbewerber eingesetzt. Keine andere SEO-Marketing-Agentur in Deutschland bietet dieses Prinzip konsequent an.' },
  { q: 'Brauche ich als kleines Unternehmen eine SEO-Agentur?', a: 'Gerade kleine Unternehmen profitieren überproportional von professioneller Suchmaschinenoptimierung: Der organische Traffic kostet nach dem initialen Aufbau kaum noch etwas. Lokales SEO durch eine erfahrene SEO-Agentur ist besonders effektiv für KMU mit regionalem Fokus.' },
  { q: 'Was ist der Unterschied zwischen SEO und SEA?', a: 'SEO (Search Engine Optimization / Suchmaschinenoptimierung) baut organische Sichtbarkeit auf, die langfristig bestehen bleibt. SEA (Search Engine Advertising / Google Ads) liefert sofortige Sichtbarkeit, kostet aber bei jedem Klick. Die beste Strategie kombiniert beides.' },
]

export const seoCaseStudies = [
  { ytId: '2wpHWuAU8Zc', title: 'Energieversum: 100+ Leads/Monat', metric: '44.362', metricLabel: 'Org. Traffic', industry: 'Photovoltaik' },
  { ytId: '4nF2yb1rAzU', title: 'Beamtenberater: 88.586 Klicks/Monat', metric: '15.238', metricLabel: 'Keywords', industry: 'Versicherung' },
  { ytId: 'mTW5nOlHcpo', title: 'Cherry-Bikes: 470 Conversions/Monat', metric: '9.303', metricLabel: 'Keywords', industry: 'E-Commerce' },
  { ytId: 'S8fPqe5PWbQ', title: 'Iris Haag: +5.000% Traffic-Wachstum', metric: '+5.000%', metricLabel: 'Traffic', industry: 'Coaching' },
]

export const seoProcessSteps = [
  { step: '01', title: 'Erstgespräch & Branchencheck', desc: 'Wir prüfen, ob deine Branche und Region noch verfügbar ist. In einem 30-minütigen Call besprechen wir deine Ziele, analysieren deinen Wettbewerb und prüfen, ob wir der richtige Partner sind.', detail: 'Kostenlos & unverbindlich' },
  { step: '02', title: 'SEO-Audit & Roadmap', desc: 'Technischer Audit, Wettbewerbsanalyse, Keyword-Recherche und Content-Gap-Analyse mit professionellen Tools wie Ahrefs, Screaming Frog und der Google Search Console. Daraus entsteht deine individuelle SEO-Roadmap.', detail: 'Innerhalb von 2 Wochen' },
  { step: '03', title: 'Umsetzung in monatlichen Sprints', desc: 'Technische Optimierung, Content-Erstellung, Schema-Markup, interne Verlinkung und strategischer Linkaufbau. Alles dokumentiert, nachvollziehbar und auf dein Geschäftsmodell zugeschnitten.', detail: 'Monatliche Sprints' },
  { step: '04', title: 'Reporting & Skalierung', desc: 'Echtzeit-Dashboard mit Rankings, Traffic und Conversions. Monatliches Reporting mit konkreten Next Steps, iterative Optimierung und Skalierung erfolgreicher Maßnahmen.', detail: 'Dashboard mit Echtzeitdaten' },
]

export const seoServices = [
  { href: '/v2/leistungen/seo', icon: 'search' as const, title: 'Technisches SEO', desc: 'Core Web Vitals, Crawling, Indexierung, Schema Markup, Mobile-Optimierung und Ladezeit — die technische Basis, ohne die keine Strategie funktioniert.' },
  { href: '/v2/leistungen/seo', icon: 'bulb' as const, title: 'Content-Strategie & Erstellung', desc: 'Keyword-Recherche, Suchintention-Analyse, Themencluster und Content-Erstellung. Inhalte, die ranken, konvertieren und Autorität aufbauen.' },
  { href: '/v2/leistungen/seo', icon: 'cursor' as const, title: 'Linkbuilding & Digital PR', desc: 'Strategischer Autoritätsaufbau durch qualitative Backlinks, Gastbeiträge und digitale PR. Keine gekauften Links, sondern echte Empfehlungen.' },
  { href: '/v2/leistungen/seo', icon: 'layout' as const, title: 'OnPage-Optimierung', desc: 'Meta-Tags, Heading-Struktur, interne Verlinkung, Bilder-SEO und URL-Architektur. Jede einzelne Seite wird zum Traffic-Asset.' },
  { href: '/v2/leistungen/seo', icon: 'monitor' as const, title: 'Lokales SEO', desc: 'Google Business Profile, lokale Keywords, NAP-Konsistenz und Bewertungsmanagement — für Unternehmen mit regionalem oder städtischem Fokus.' },
  { href: '/v2/leistungen/geo-aio-llmo', icon: 'people' as const, title: 'GEO / AIO / LLMO', desc: 'Optimierung für ChatGPT, Perplexity und Google AI Overviews. Deine Sichtbarkeit in der nächsten Generation der Suche — heute schon vorbereitet.' },
]

export const seoStats = [
  { val: '100k+', label: 'Rankings erzielt' },
  { val: '648%', label: 'Ø Traffic-Wachstum' },
  { val: '24+', label: 'Monate Kundenbindung' },
  { val: '5.0', label: 'Google Bewertung' },
]

export const cities = [
  'Nürnberg', 'München', 'Berlin', 'Hamburg', 'Frankfurt', 'Köln', 'Stuttgart',
  'Düsseldorf', 'Leipzig', 'Hannover', 'Bremen', 'Dresden', 'Augsburg', 'Bamberg',
  'Würzburg', 'Regensburg', 'Erlangen', 'Fürth', 'Bayreuth', 'Coburg',
  'Kronach', 'Bad Staffelstein', 'Schwäbisch Hall',
]

export const branches = [
  'Photovoltaik', 'Versicherung', 'E-Commerce', 'Coaching', 'Handwerk',
  'Immobilien', 'Zahnarzt', 'Anwalt', 'Steuerberater', 'Finanzberatung',
  'SaaS', 'Personalvermittlung', 'Gastronomie', 'Fitness', 'Medizintechnik',
  'Architektur', 'Logistik', 'Bildung', 'Tourismus', 'Automobilzulieferer',
]

export function buildSeoSchema(url: string, city?: string) {
  const name = city ? `sagemedia GmbH — SEO-Agentur ${city}` : 'sagemedia GmbH — SEO-Agentur'
  const fullUrl = `https://sagemedia.de${url}`

  return {
    professionalService: {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name,
      url: fullUrl,
      telephone: '+4995733313759',
      email: 'info@sagemedia.de',
      description: 'Branchenexklusive SEO-Agentur mit eigener Methodik. 100.000+ Rankings, SEO-Contest Gewinner 2021, 648% durchschnittliches Traffic-Wachstum.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Goethestraße 12',
        addressLocality: 'Bad Staffelstein',
        postalCode: '96231',
        addressRegion: 'Bayern',
        addressCountry: 'DE',
      },
      geo: { '@type': 'GeoCoordinates', latitude: '50.1005', longitude: '11.0035' },
      founder: { '@type': 'Person', name: 'André Schäfer' },
      areaServed: city
        ? { '@type': 'City', name: city }
        : { '@type': 'Country', name: 'Deutschland' },
      serviceType: ['Suchmaschinenoptimierung', 'SEO-Beratung', 'Content-Strategie', 'Technisches SEO', 'Linkbuilding', 'Lokales SEO'],
      award: ['SEO-Contest 2021 — 1. Platz', 'Top SEO-Agentur 2022 — Agenturtipp.de'],
      aggregateRating: { '@type': 'AggregateRating', ratingValue: '5.0', reviewCount: '32', bestRating: '5' },
    },
    service: {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: city ? `SEO-Agentur ${city}` : 'SEO-Agentur Leistungen',
      provider: { '@type': 'Organization', name: 'sagemedia GmbH', url: 'https://sagemedia.de' },
      description: 'Professionelle Suchmaschinenoptimierung mit Branchenexklusivität. Technisches SEO, Content-Strategie, Linkbuilding, lokales SEO und Optimierung für KI-Suchsysteme.',
      areaServed: city
        ? { '@type': 'City', name: city }
        : { '@type': 'Country', name: 'Deutschland' },
      serviceType: 'Suchmaschinenoptimierung',
      offers: { '@type': 'Offer', description: 'Kostenloses Erstgespräch und Branchencheck', price: '0', priceCurrency: 'EUR' },
    },
  }
}
