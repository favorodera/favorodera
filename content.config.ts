import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
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
        technologies: z.array(z.string()),
      }),
    }),
    postsIndex: defineCollection({
      source: 'posts/index.md',
      type: 'page',
    }),
    posts: defineCollection({
      source: {
        include: 'posts/*.md',
        exclude: ['posts/index.md'],
      },
      type: 'page',
      schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.string(),
      }),
    }),
  },
})
