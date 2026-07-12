import tailwindcss from '@tailwindcss/vite'
import { definePerson } from 'nuxt-schema-org/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  devtools: false,

  modules: [
    'centoui-nuxt',
    '@nuxt/icon',
    '@nuxtjs/color-mode',

    '@nuxt/fonts',
    'motion-v/nuxt',

    '@nuxtjs/seo',
    '@vercel/analytics',

    '@nuxt/eslint',
  ],

  eslint: {
    config: {
      standalone: false,
    },
  },

  colorMode: {
    classSuffix: '',
  },

  routeRules: {
    '/': { prerender: true },
  },

  schemaOrg: {
    identity: definePerson({
      additionalName: 'Chidera',
      alternateName: 'Favour Chidera Emeka',
      familyName: 'Emeka',
      givenName: 'Favour',
      name: 'Favour Emeka',

      description: 'Frontend Engineer.',
      image: 'https://github.com/favorodera.png',
      jobTitle: 'Frontend Developer',

      email: 'favorodera@gmail.com',
      url: 'https://favorodera.vercel.app',

      sameAs: [
        'https://x.com/favorodera',
        'https://github.com/favorodera',
        'https://linkedin.com/in/faorodera',
        'https://facebook.com/favorodera',
        'https://wa.me/+2348024383756',
      ],

      gender: 'male',

      knowsAbout: [
        'Frontend Development',
        'Vue.js',
        'Nuxt.js',
        'TypeScript',
        'TailwindCSS',
        'Developer Tooling',
        'Web Performance',
      ],

      alumniOf: {
        '@type': 'EducationalOrganization',
        'name': 'Alt School Africa',
        'url': 'https://altschoolafrica.com/',
      },
    }),
  },

  css: ['~/assets/css/index.css'],

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },

      meta: [
        {
          content: 'width=device-width, initial-scale=1',
          name: 'viewport',
        },
        {
          charset: 'utf8',
        },
        {
          content: 'qYU6PqljRftNzCNBLdEFxnKJKwH-Aj7aJ9CLp6itnhM',
          name: 'google-site-verification',
        },

      ],

      link: [
        { href: '/favicon.ico', rel: 'icon', sizes: '48x48' },
        { href: '/favicon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
        { href: '/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
        { href: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/sitemap.xml',
        '/robots.txt',
      ],
    },
  },

  icon: {
    componentName: 'NuxtIcon',
    customCollections: [
      {
        dir: './app/assets/icons',
        prefix: 'custom',
      },
    ],
    mode: 'svg',
    provider: 'iconify',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: {
    defaults: {
      weights: [
        100,
        200,
        300,
        400,
        500,
        600,
        700,
        800,
        900,
      ],
    },
  },

  sitemap: {
    zeroRuntime: true,
  },

  site: {
    defaultLocale: 'en',
    description: 'Frontend Engineer.',
    indexable: true,
    name: 'Favour Emeka',
    url: 'https://favorodera.vercel.app',
  },

  ogImage: {
    zeroRuntime: true,
  },
})
