export interface CaseStudy {
  slug: string
  company: string
  industry: string
  stat: string
  tags: string[]
  image: string
  ytId?: string
  title: string
  subtitle: string
  kpis: { value: string; label: string }[]
  ausgangslage?: { title: string; points: string[] }
  ziel?: { title: string; points: string[] }
  strategie?: { title: string; items: { icon: string; text: string }[] }
  timeline?: { date: string; text: string }[]
  results?: { metrics: { value: string; label: string }[]; achievements: string[] }
  about?: { text: string; details: { label: string; value: string }[] }
}

export const cases: CaseStudy[] = [
  {
    slug: 'energieversum',
    company: 'Energieversum',
    industry: 'Photovoltaik',
    stat: '44.362 Organic Traffic \u00b7 100+ Leads/Monat',
    tags: ['SEO', 'Content-Strategie'],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
    ytId: '2wpHWuAU8Zc',
    title: 'Von 0 auf 44.362 Organic Traffic',
    subtitle: 'Wie Energieversum innerhalb von zwei Jahren zur ersten Anlaufstelle f\u00fcr Photovoltaik wurde und Marktanteile von Enpal und 1Komma5\u00b0 holte.',
    kpis: [
      { value: '6.680+', label: 'Keywords Pos 1' },
      { value: '44.362', label: 'Organic Traffic/Monat' },
      { value: '100+', label: 'Leads/Monat' },
    ],
    ausgangslage: {
      title: 'Was war die Ausgangssituation?',
      points: [
        'Website vorhanden, aber kaum organische Sichtbarkeit. Kunden fanden Energieversum bei Google nicht.',
        'PV-Markt dominiert von milliardenschweren Playern wie Enpal und 1Komma5\u00b0. Gegen deren Budgets kam Energieversum organisch nicht an.',
        'Kein Content-Fundament. Wer nach Photovoltaik suchte, landete bei Wettbewerbern.',
      ],
    },
    ziel: {
      title: 'Was sollte erreicht werden?',
      points: [
        'Marktanteile von den Big Playern holen. \u00dcber organische Sichtbarkeit statt Werbebudgets.',
        'Energieversum als fachliche Autorit\u00e4t im PV-Markt positionieren.',
        'Planbaren Strom an qualifizierten Leads generieren, ohne Abh\u00e4ngigkeit von bezahlter Werbung.',
      ],
    },
    strategie: {
      title: 'Wie sind wir vorgegangen?',
      items: [
        { icon: '01', text: 'Wissensportal aufgebaut: Ratgeber zu Einspeiseverg\u00fctung, Amortisation, F\u00f6rderungen, Eigenverbrauch, Stromcloud.' },
        { icon: '02', text: 'Regionale Landingpages: Eigene Seiten f\u00fcr Hannover, Leipzig, Berlin und weitere St\u00e4dte.' },
        { icon: '03', text: 'Technische Optimierung: Ladezeiten, interne Verlinkung, Indexierung.' },
        { icon: '04', text: 'Google Business Profile: \u00dcber 50 Handelsvertreter-Profile aufgebaut.' },
      ],
    },
    timeline: [
      { date: 'Jan 2021', text: 'Kick-off & Audit' },
      { date: 'Apr 2021', text: 'Content-Strategie, erste Ratgeber online' },
      { date: 'Okt 2021', text: '5.000 Besucher/Monat, erste Top-Rankings' },
      { date: 'Apr 2022', text: '18.000 Besucher/Monat, regionale Seiten live' },
      { date: 'Jan 2023', text: '35.000 Besucher/Monat' },
      { date: 'Apr 2023', text: '44.362 Organic Traffic Peak, 6.680+ Keywords Pos 1' },
      { date: 'Jul 2023', text: '100+ Leads/Monat' },
    ],
    results: {
      metrics: [
        { value: '44.362', label: 'Organic Traffic/Monat' },
        { value: '6.680+', label: 'Keywords Pos 1' },
        { value: '10.112', label: 'Keywords Top-Positionen' },
      ],
      achievements: [
        'Position 1 f\u00fcr "photovoltaik einfamilienhaus", "einspeiseverg\u00fctung pv 2022" und hunderte weitere',
        '10.112 Keywords in den Top-Positionen',
        'Marktanteile von Enpal und 1Komma5\u00b0 geholt',
      ],
    },
    about: {
      text: 'Die Energieversum GmbH & Co. KG ist ein Anbieter von Photovoltaikanlagen und Stromspeichern mit Hauptsitz in Steinhagen. Gegr\u00fcndet 2010 von Ren\u00e9 M\u00f6llenbeck, geh\u00f6rt das Unternehmen als Teil der Senec GmbH zur EnBW-Gruppe.',
      details: [
        { label: 'Branche', value: 'Photovoltaik (EnBW-Gruppe)' },
        { label: 'Standort', value: 'Steinhagen (15+ Standorte)' },
        { label: 'Mitarbeiter', value: 'ca. 450' },
      ],
    },
  },
  {
    slug: 'beamtenberater',
    company: 'Beamtenberater',
    industry: 'Versicherungsmakler',
    stat: '15.238 Keywords \u00b7 88.586 Klicks/Monat Peak',
    tags: ['SEO', 'Content-Strategie'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    ytId: '4nF2yb1rAzU',
    title: '15.238 Keywords und 88.586 Klicks/Monat',
    subtitle: 'Wie Beamtenberater zur f\u00fchrenden Online-Anlaufstelle f\u00fcr Beamtenversicherungen wurde.',
    kpis: [
      { value: '15.238', label: 'Keywords' },
      { value: '88.586', label: 'Klicks/Monat Peak' },
      { value: '100+', label: 'Top-3 Rankings' },
    ],
  },
  {
    slug: 'cherry-bikes',
    company: 'Cherry-Bikes',
    industry: 'E-Bike Handel',
    stat: '9.303 Keywords \u00b7 470 Conversions/Monat',
    tags: ['SEO', 'Google Ads', 'Local SEO'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800&q=80',
    ytId: 'mTW5nOlHcpo',
    title: '9.303 Keywords und 470 Conversions/Monat',
    subtitle: 'Wie Cherry-Bikes mit SEO, Google Ads und Local SEO den E-Bike-Markt eroberte.',
    kpis: [
      { value: '9.303', label: 'Keywords' },
      { value: '470', label: 'Conversions/Monat' },
      { value: '3x', label: 'ROI auf Ads' },
    ],
  },
  {
    slug: 'iris-haag',
    company: 'Iris Haag',
    industry: 'Business Coaching',
    stat: '1.383 Top-3 Rankings \u00b7 +5.000% Traffic',
    tags: ['SEO', 'Content-Strategie'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    ytId: 'S8fPqe5PWbQ',
    title: '+5.000% Traffic-Wachstum f\u00fcr Iris Haag',
    subtitle: 'Wie eine Business-Coaching-Marke mit Content-Strategie zur Autorit\u00e4t in ihrer Nische wurde.',
    kpis: [
      { value: '1.383', label: 'Top-3 Rankings' },
      { value: '+5.000%', label: 'Traffic-Wachstum' },
      { value: '200+', label: 'Ratgeber-Artikel' },
    ],
  },
  {
    slug: 'bluebranch',
    company: 'Bluebranch',
    industry: 'App-Entwicklung',
    stat: '552 Top-10 Rankings \u00b7 1,76 Mio. Impressionen',
    tags: ['SEO', 'Content-Strategie'],
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80',
    title: '552 Top-10 Rankings f\u00fcr Bluebranch',
    subtitle: 'Wie eine App-Agentur mit gezieltem SEO 1,76 Mio. Impressionen erzielte.',
    kpis: [
      { value: '552', label: 'Top-10 Rankings' },
      { value: '1,76 Mio.', label: 'Impressionen' },
      { value: '80+', label: 'Top-3 Rankings' },
    ],
  },
  {
    slug: 'niro-media',
    company: 'niro-media',
    industry: 'Social Recruiting',
    stat: '132 Top-3 Rankings \u00b7 335 Top-10 \u00b7 8 Monate',
    tags: ['SEO', 'Content-Strategie'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    title: '132 Top-3 Rankings in nur 8 Monaten',
    subtitle: 'Wie niro-media als Social-Recruiting-Agentur innerhalb k\u00fcrzester Zeit organisch sichtbar wurde.',
    kpis: [
      { value: '132', label: 'Top-3 Rankings' },
      { value: '335', label: 'Top-10 Rankings' },
      { value: '8', label: 'Monate' },
    ],
  },
  {
    slug: 'akut-med',
    company: 'akut-med',
    industry: 'Personalvermittlung Medizin',
    stat: '11.540+ Top-3 Rankings \u00b7 15.349 Keywords',
    tags: ['SEO', 'Google Ads', 'Content'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    title: '11.540+ Top-3 Rankings f\u00fcr akut-med',
    subtitle: 'Wie ein Personalvermittler im Medizinbereich mit SEO und Google Ads die Branche dominierte.',
    kpis: [
      { value: '11.540+', label: 'Top-3 Rankings' },
      { value: '15.349', label: 'Keywords' },
      { value: '500+', label: 'Leads/Monat' },
    ],
  },
  {
    slug: 'objektausbau-biermann',
    company: 'Objektausbau Biermann',
    industry: 'Trockenbau',
    stat: '2.875 Klicks \u00b7 33 Conversions \u00b7 1,82\u20ac CPC',
    tags: ['Google Ads', 'Landingpage'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    title: '33 Conversions bei 1,82\u20ac CPC',
    subtitle: 'Wie ein Trockenbau-Unternehmen mit Google Ads und optimierten Landingpages neue Auftr\u00e4ge generierte.',
    kpis: [
      { value: '2.875', label: 'Klicks' },
      { value: '33', label: 'Conversions' },
      { value: '1,82\u20ac', label: 'CPC' },
    ],
  },
  {
    slug: 'fechner-sauna',
    company: 'Fechner Sauna',
    industry: 'Sauna Manufaktur',
    stat: '706 Conversions \u00b7 29,63\u20ac pro Anfrage',
    tags: ['Google Ads', 'Landingpage'],
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80',
    title: '706 Conversions f\u00fcr 29,63\u20ac pro Anfrage',
    subtitle: 'Wie eine Sauna-Manufaktur mit Google Ads hochwertige Anfragen zu niedrigen Kosten generierte.',
    kpis: [
      { value: '706', label: 'Conversions' },
      { value: '29,63\u20ac', label: 'Pro Anfrage' },
      { value: '4,2%', label: 'Conversion Rate' },
    ],
  },
  {
    slug: 'foerch',
    company: 'F\u00f6rch',
    industry: 'B2B Recruiting',
    stat: '4.074 Klicks \u00b7 2.846 Conversions \u00b7 0,64\u20ac CPC',
    tags: ['Google Ads'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    title: '2.846 Conversions bei 0,64\u20ac CPC',
    subtitle: 'Wie F\u00f6rch mit Google Ads im B2B-Recruiting-Bereich extrem g\u00fcnstige Bewerbungen generierte.',
    kpis: [
      { value: '4.074', label: 'Klicks' },
      { value: '2.846', label: 'Conversions' },
      { value: '0,64\u20ac', label: 'CPC' },
    ],
  },
]
