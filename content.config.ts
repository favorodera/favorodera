import { defineCollection, defineContentConfig } from '@nuxt/content'
import { z } from 'zod'

const profileSchema = z.object({
  bio: z.array(z.string()),
  displayName: z.array(z.string()),
  initials: z.string(),
  location: z.string(),
  name: z.string().min(1),
  portrait: z.string(),
  roleLine: z.array(z.string()),
  timezone: z.string(),
})

export default defineContentConfig({
  collections: {
    profile: defineCollection({
      schema: profileSchema,
      source: 'profile.json',
      type: 'data',
    }),
  },
})
