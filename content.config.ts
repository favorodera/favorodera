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
        thumbnail: z.string().optional(),
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
    toolbox: defineCollection({
      source: 'toolbox.json',
      type: 'data',
      schema: z.object({
        boxes: z.record(
          z.string(),
          z.array(z.object({
            name: z.string(),
            description: z.string().optional(),
            url: z.string(),
            icon: z.string().optional(),
          }),
          ),
        ),
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
  },
})
