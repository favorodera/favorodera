// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@nuxt/fonts',
    '@nuxt/content',
    'nuxt-studio',
    '@nuxtjs/seo',
    '@nuxt/a11y',
    '@nuxt/icon',
  ],

  devtools: { enabled: true },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
    },
    pageTransition: { name: 'fade-out-in', mode: 'out-in' },
    layoutTransition: { name: 'fade-out-in', mode: 'out-in' },
  },

  css: ['~/assets/css/app.css'],

  site: {
    url: 'https://favorodera.vercel.app/',
    name: 'Favour Emeka',
    description: 'Frontend Engineer',
    indexable: true,
  },

  colorMode: {
    classSuffix: '',
  },

  content: {
    renderer: {
      anchorLinks: false,
    },
  },

  appConfig: {
    icon: {
      mode: 'svg',
    },
  },

  runtimeConfig: {
    studio: {
      auth: {
        github: {
          clientId: '',
          clientSecret: '',
        },
      },
    },
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2025-07-15',

  vite: {
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tailwindcss() as any,
    ],
    optimizeDeps: {
      include: [
        // '@vercel/analytics/nuxt',
        'zod',
      ],
    },
  },

  eslint: {
    config: {
      stylistic: true,
    },
  },

  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },

  schemaOrg: {
    identity: definePerson({
      name: 'Favour Emeka',
      givenName: 'Favour',
      familyName: 'Emeka',
      additionalName: 'Chidera',
      alternateName: 'Favour Chidera Emeka',

      image: '/avatar.png',
      description: 'Frontend Engineer',
      jobTitle: 'Frontend Engineer',

      email: 'favorodera@gmail.com',
      url: 'https://favorodera.vercel.app/',
      sameAs: [
        'https://x.com/favorodera',
        'https://github.com/favorodera',
        'https://facebook.com/favorodera',
        'https://wa.me/+2348024383756',
      ],
      gender: 'male',
    }),
  },

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  studio: {
    route: '/_studio',
    repository: {
      provider: 'github',
      owner: 'favorodera',
      repo: 'favorodera',
      branch: 'main',
    },
  },
})
