import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    homePage: defineCollection({
      type: 'page',
      source: 'index.md',
    }),
    projects: defineCollection({
      type: 'data',
      source: 'projects/*.md',
      schema: z.object({
        name: z.string(),
        id: z.string(),
        briefDescription: z.string(),
        icon: z.string(),
      }),
    }),
    experience: defineCollection({
      type: 'data',
      source: 'experiences/*.json',
      schema: z.object({
        name: z.string(),
        type: z.string(),
        firm: z.string(),
        duration: z.string(),
        icon: z.string(),
        role: z.string(),
      }),
      
    }),
  },
})
