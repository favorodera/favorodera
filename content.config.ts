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
          light: z.string().optional(),
          dark: z.string().optional(),
        }).optional(),
      }),
    }),
    articles: defineCollection({
      source: 'articles/*.md',
      type: 'page',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.string(),
      }),
    }),
    bookmarks: defineCollection({
      source: 'bookmarks.json',
      type: 'data',
      schema: z.object({
        bookmarks: z.array(z.object({
          title: z.string(),
          url: z.string(),
          description: z.string().optional(),
        })),
      }),
    }),
    toolkit: defineCollection({
      source: 'toolkit.json',
      type: 'data',
      schema: z.object({
        toolkit: z.array(z.object({
          label: z.string(),
          icon: z.string(),
          url: z.string(),
        })),
      }),
    }),
  },
})
