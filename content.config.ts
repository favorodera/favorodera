import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    homePage: defineCollection({
      type: 'page',
      source: 'index.md',
    }),
    projectsPage: defineCollection({
      type: 'page',
      source: 'projects/index.md',
    }),
    stackAndSocials: defineCollection({
      type: 'data',
      source: 'stack-and-socials.json',
      schema: z.object({
        stack: z.array(z.object({
          name: z.string(),
          icon: z.string(),
          url: z.string(),
        })),
        socials: z.array(z.object({
          name: z.string(),
          icon: z.string(),
          url: z.string(),
        })),
      }),
    }),
    projects: defineCollection({
      type: 'data',
      source: {
        include: 'projects/*.md',
        exclude: ['projects/index.md'],
      },
      schema: z.object({
        name: z.string(),
        briefDescription: z.string(),
        icon: z.string(),
      }),
    }),
    experiences: defineCollection({
      type: 'page',
      source: 'experiences/*.md',
      schema: z.object({
        name: z.string(),
        type: z.string(),
        firm: z.string(),
        duration: z.string(),
        icon: z.string(),
        role: z.string(),
      }),
    }),
    posts: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        date: z.string(),
        duration: z.string(),
      }),
    }),
  },
})
