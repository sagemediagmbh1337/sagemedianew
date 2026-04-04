import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const lexikon = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/lexikon' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    description: z.string(),
    author: z.object({
      name: z.string(),
      role: z.string(),
      bio: z.string().optional(),
      image: z.string().optional(),
    }).optional(),
    related: z.array(z.object({
      term: z.string(),
      slug: z.string(),
    })).optional().default([]),
    ctas: z.array(z.object({
      after_section: z.number(),
      title: z.string(),
      text: z.string(),
      link_text: z.string().optional().default('Erstgespräch vereinbaren'),
      link_url: z.string().optional().default('/kontakt'),
    })).optional().default([]),
  }),
})

const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/caseStudies' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    branche: z.string(),
    client: z.string(),
    clientLogo: z.string().optional(),
    heroImage: z.string().optional(),
    kpis: z.array(z.object({
      value: z.string(),
      label: z.string(),
    })),
    company: z.object({
      description: z.string(),
      facts: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })),
      logo: z.string().optional(),
      website: z.string().optional(),
    }),
    challengesHeading: z.string().optional(),
    challenges: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional().default([]),
    goalsHeading: z.string().optional(),
    goals: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })).optional().default([]),
    strategyHeading: z.string().optional(),
    strategy: z.array(z.object({
      title: z.string(),
      description: z.string(),
    })),
    timeline: z.array(z.object({
      date: z.string(),
      title: z.string(),
      description: z.string().optional(),
      isCurrent: z.boolean().optional().default(false),
    })),
    results: z.object({
      kpis: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })),
      highlights: z.array(z.string()),
      proofImage: z.string().optional(),
    }),
    testimonial: z.object({
      quote: z.string(),
      author: z.string(),
      role: z.string(),
      image: z.string().optional(),
    }).optional(),
    services: z.array(z.string()).optional().default([]),
    relatedCases: z.array(z.string()).optional().default([]),
    serpPreview: z.object({
      keyword: z.string(),
      resultCount: z.string().optional(),
      sponsored: z.boolean().optional().default(false),
      sectionTitle: z.string().optional(),
      sectionSubtitle: z.string().optional(),
      featured: z.object({
        url: z.string(),
        breadcrumb: z.string(),
        title: z.string(),
        description: z.string(),
        sitelinks: z.array(z.string()).optional().default([]),
      }),
      competitors: z.array(z.object({
        url: z.string(),
        breadcrumb: z.string(),
        title: z.string(),
        description: z.string(),
      })).optional().default([]),
    }).optional(),
    keywordRankings: z.object({
      description: z.string().optional(),
      keywords: z.array(z.object({
        keyword: z.string(),
        before: z.string(),
        after: z.string(),
        change: z.string(),
      })),
    }).optional(),
    customerJourney: z.object({
      phases: z.array(z.object({
        phase: z.string(),
        title: z.string(),
        description: z.string(),
        query: z.string().optional(),
      })),
      stats: z.array(z.object({
        label: z.string(),
        value: z.string(),
      })).optional().default([]),
    }).optional(),
    growthEngine: z.object({
      title: z.string().optional(),
      description: z.string().optional(),
      steps: z.array(z.object({
        text: z.string(),
      })),
    }).optional(),
    extendedResults: z.object({
      description: z.string(),
      items: z.array(z.string()),
      trafficImage: z.string().optional(),
      trafficImageAlt: z.string().optional(),
    }).optional(),
    googleAds: z.object({
      kpis: z.array(z.object({
        value: z.string(),
        label: z.string(),
      })),
      description: z.string().optional(),
    }).optional(),
    roiCalculation: z.object({
      invested: z.string(),
      conversions: z.string(),
      avgOrderValue: z.string(),
      avgOrderLabel: z.string().optional(),
      potentialRevenue: z.string(),
      revenueFormula: z.string().optional(),
      roas: z.string().optional(),
      costPerConversion: z.string().optional(),
      conversionsPerMonth: z.string().optional(),
    }).optional(),
    aiVisibility: z.object({
      items: z.array(z.object({
        type: z.enum(['google-aio', 'chatgpt']),
        query: z.string(),
        clientInitials: z.string(),
        clientColor: z.string().optional().default('bg-emerald-600'),
        summary: z.string(),
        bulletTitle: z.string().optional(),
        bullets: z.array(z.string()).optional().default([]),
        sourceLabel: z.string().optional(),
        sourceExtra: z.string().optional(),
      })),
    }).optional(),
    seo: z.object({
      metaTitle: z.string(),
      metaDescription: z.string(),
    }),
  }),
})

const seoCity = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/seoCity' }),
  schema: z.object({
    city: z.string(),
    region: z.string(),
    bundesland: z.string(),
    title: z.string(),
    description: z.string(),
    heroTitle1: z.string(),
    heroTitle2: z.string(),
    heroSubtitle: z.string(),

    /* City-Profil */
    population: z.string(),
    distanceHQ: z.string(),
    cityFacts: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional().default([]),

    /* Lokale Keywords mit Suchvolumen */
    localKeywords: z.array(z.object({
      keyword: z.string(),
      volume: z.string(),
      difficulty: z.enum(['niedrig', 'mittel', 'hoch']).optional().default('mittel'),
    })).optional().default([]),

    /* Umland */
    nearbyAreas: z.array(z.string()).optional().default([]),

    /* Lokale Branchen-Schwerpunkte */
    localIndustries: z.array(z.string()).optional().default([]),

    /* Relevante Case Studies (slugs aus cases.ts) */
    relevantCases: z.array(z.string()).optional().default([]),

    /* Wirtschaftsprofil — unique deep-dive */
    economyBlock: z.object({
      heading: z.string(),
      text: z.string(),
      highlights: z.array(z.object({
        label: z.string(),
        text: z.string(),
      })),
    }).optional(),

    /* Kundenreise — wie lokale Kunden suchen */
    customerJourneyBlock: z.object({
      heading: z.string(),
      text: z.string(),
      steps: z.array(z.object({
        step: z.string(),
        text: z.string(),
      })),
    }).optional(),

    /* Content */
    localIntro: z.string(),
    localContent: z.array(z.object({
      heading: z.string(),
      text: z.string(),
    })),
    localFaqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional().default([]),
  }),
})

const seoBranch = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/seoBranch' }),
  schema: z.object({
    branch: z.string(),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    heroTitle1: z.string(),
    heroTitle2: z.string(),
    heroSubtitle: z.string(),

    branchFacts: z.array(z.object({
      label: z.string(),
      value: z.string(),
    })).optional().default([]),

    /* Branchenspezifische Keywords */
    branchKeywords: z.array(z.object({
      keyword: z.string(),
      volume: z.string(),
      difficulty: z.enum(['niedrig', 'mittel', 'hoch']).optional().default('mittel'),
    })).optional().default([]),

    /* Warum SEO für diese Branche */
    whyBlock: z.object({
      heading: z.string(),
      text: z.string(),
      points: z.array(z.object({
        label: z.string(),
        text: z.string(),
      })),
    }).optional(),

    /* Typische Kundenreise in der Branche */
    journeyBlock: z.object({
      heading: z.string(),
      text: z.string(),
      steps: z.array(z.object({
        step: z.string(),
        text: z.string(),
      })),
    }).optional(),

    /* Content-Blöcke */
    branchIntro: z.string(),
    branchContent: z.array(z.object({
      heading: z.string(),
      text: z.string(),
    })),
    branchFaqs: z.array(z.object({
      q: z.string(),
      a: z.string(),
    })).optional().default([]),
  }),
})

export const collections = { lexikon, caseStudies, seoCity, seoBranch }
