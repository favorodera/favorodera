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
  ],

  devtools: false,

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
        {
          charset: 'utf-8',
        },
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon.ico',
          sizes: '48x48',
        },
        {
          rel: 'icon',
          href: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          rel: 'icon',
          href: '/favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180',
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
    description: 'Frontend Developer',
    indexable: true,
  },

  colorMode: {
    classSuffix: '',
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      dev: true,
    },
    renderer: {
      anchorLinks: false,
    },
  },

  routeRules: {
    '/': { prerender: true },
    '/projects': { prerender: true },
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2025-07-15',

  nitro: {
    prerender: {
      routes: ['/', '/projects'],
      crawlLinks: true,
    },
  },

  vite: {
    plugins: [
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      tailwindcss() as any,
    ],
    optimizeDeps: {
      include: [
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

      image: 'https://github.com/favorodera.png',
      description: 'Frontend Developer',
      jobTitle: 'Frontend Developer',

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

  sitemap: {
    zeroRuntime: true,
  },

  studio: {
    route: '/studio',
    repository: {
      provider: 'github',
      owner: 'favorodera',
      repo: 'favorodera',
      branch: 'main',
    },
  },
})
