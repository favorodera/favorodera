import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    home: defineCollection({
      source: 'index.md',
      type: 'page',
    }),
    projectsIndex: defineCollection({
      source: 'projects/index.md',
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
        include: 'posts/**',
        exclude: ['posts/index.md'],
        prefix: '/',
      },
      type: 'page',
      schema: z.object({
        slug: z.string(),
        title: z.string(),
        description: z.string(),
        date: z.string(),
      }),
    }),
  },
})
