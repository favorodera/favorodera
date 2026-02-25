import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    homeIndex: defineCollection({
      source: 'index.md',
      type: 'page',
    }),
  },
})
