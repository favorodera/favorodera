import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    homeIndex: defineCollection({
      source: 'index.md',
      type: 'page',
    }),
    projects: defineCollection({
      source: 'projects/*.yml',
      type: 'data',
      schema: z.object({
        title: z.string(),
        description: z.string(),
        url: z.string(),
        thumbnail: z.object({
          light: z.string(),
          dark: z.string(),
        }).optional(),
      }),
    }),
    articlesIndex: defineCollection({
      source: 'articles/index.md',
      type: 'page',
    }),
    articles: defineCollection({
      source: {
        include: 'articles/**',
        exclude: ['articles/index.md'],
        prefix: '/',
      },
      type: 'page',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.string(),
      }),
    }),
  },
})
