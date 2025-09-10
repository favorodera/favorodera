import { defineCollection, defineContentConfig, z } from '@nuxt/content'
import { asSeoCollection } from '@nuxtjs/seo/content'

const contactSchema = z.object({
  label: z.string(),
  url: z.string(),
  icon: z.string(),
})

const workExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  description: z.string(),
  achievements: z.array(z.string()).optional(),
})

const educationSchema = z.object({
  degree: z.string(),
  institution: z.string(),
  startDate: z.string(),
  endDate: z.string(),
})

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  technologies: z.array(z.string()),
  url: z.string(),
})

export default defineContentConfig({
  collections: {
    index: defineCollection(
      asSeoCollection({
        type: 'data',
        source: 'index.json',
        schema: z.object({
          name: z.string().nonempty(),
          headline: z.string().nonempty(),
          location: z.string().nonempty(),
          avatar: z.string().nonempty(),
          about: z.string().nonempty(),
          contact: z.array(contactSchema),
          workExperience: z.array(workExperienceSchema),
          education: z.array(educationSchema),
          skills: z.array(z.string()),
          projects: z.array(projectSchema),
        }),
      }),
    ),
  },
})
