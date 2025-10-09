import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const toolBoxItem = z.object({
  name: z.string(),
  description: z.string().optional(),
  icon: z.string().optional(),
  url: z.string().optional(),
})

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
        boxes: z.record(z.string(), z.array(toolBoxItem)),
      }),
    }),
  },
})
