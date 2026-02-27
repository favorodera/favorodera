import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      source: 'index.md',
      type: 'page',
    }),

    projectsMd: defineCollection({
      source: 'projects/index.md',
      type: 'page',
    }),

    projectsJson: defineCollection({
      source: 'projects/*.json',
      type: 'data',
      schema: z.object({
        name: z.string(),
        description: z.string(),
        url: z.string(),
      }),
    }),
  },
})
