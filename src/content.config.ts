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

export const collections = { lexikon }
