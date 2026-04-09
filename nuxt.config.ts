import tailwindcss from '@tailwindcss/vite'
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    'shadcn-nuxt',
    '@nuxt/icon',
    '@vercel/analytics',
    'motion-v/nuxt',
    '@nuxtjs/seo',
  ],

  // Explicit component resolution path (app-layer components directory)
  components: [
    './components',
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
        // Favicon set — covers all major browsers and Apple devices
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
      ],
    },
  },

  css: ['./app/css/index.css'],

  site: {
    url: 'https://favorodera.vercel.app',
    name: 'Favour Emeka',
    description: 'Frontend engineer based in Nigeria building developer tooling and production interfaces that hold up at scale.',
    indexable: true,
    defaultLocale: 'en',
  },

  colorMode: {
    classSuffix: '',
  },

  routeRules: {
    '/': { prerender: true },
  },

  compatibilityDate: '2025-05-15',

  nitro: {
    prerender: {
      routes: [
        '/',
      ],
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      tailwindcss(),
    ],
    optimizeDeps: {
      include: [
        'class-variance-authority',
        'reka-ui',
        '@vueuse/core',
        'clsx',
        'tailwind-merge',
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

  icon: {
    mode: 'svg',
  },

  ogImage: {
    enabled: false,
  },

  schemaOrg: {
    identity: definePerson({
      name: 'Favour Emeka',
      givenName: 'Favour',
      familyName: 'Emeka',
      additionalName: 'Chidera',
      alternateName: 'Favour Chidera Emeka',

      image: 'https://github.com/favorodera.png',
      description: 'Frontend developer based in Nigeria building interfaces that hold up at scale.',
      jobTitle: 'Frontend Developer',

      email: 'favorodera@gmail.com',
      url: 'https://favorodera.vercel.app',

      // Related profiles — used by Google to consolidate identity across platforms
      sameAs: [
        'https://x.com/favorodera',
        'https://github.com/favorodera',
        'https://linkedin.com/in/faorodera',
        'https://facebook.com/favorodera',
        'https://wa.me/+2348024383756',
      ],

      gender: 'male',

      // E-E-A-T signals — helps Google understand expertise and authority
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

  seo: {
    redirectToCanonicalSiteUrl: true,
  },

  shadcn: {
    prefix: '', // no component prefix — use bare shadcn names
    componentDir: '@/components/shadcn',
  },

  sitemap: {
    // enabled: false,
    urls: [
      '/',
    ],
    zeroRuntime: true,
    strictNuxtContentPaths: true,
  },
})
