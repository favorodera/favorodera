import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

const ProjectSchema = z.object({
  date: z.string().optional(),
  description: z.string().min(1, 'Description is required'),
  image: z.string().optional(),
  title: z.string().min(1, 'Title is required'),
})

export default defineContentConfig({
  collections: {
    project: defineCollection({
      schema: ProjectSchema,
      source: 'projects/**',
      type: 'data',
    }),
  },
})
