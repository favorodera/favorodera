import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      source: 'index.md',
      type: 'page',
    }),
  },
})
