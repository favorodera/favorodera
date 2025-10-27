// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/content',
    '@nuxtjs/seo',
    '@nuxt/image',
  ],
  devtools: { enabled: true },

  app: {
    rootTag: 'main',
    rootAttrs: {
      id: 'app',
    },
    pageTransition: { name: 'fade-out-in', mode: 'out-in' },
    layoutTransition: { name: 'fade-out-in', mode: 'out-in' },
  },

  css: ['~/assets/styles/index.css'],

  site: {
    url: 'https://favorodera.vercel.app/',
    name: 'Favour Emeka',
    description: 'Frontend Web Developer specializing in Vue.js, Nuxt.js and Typescript.',
  },

  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
    renderer: {
      anchorLinks: false,
    },
    build: {
      markdown: {
        toc: {
          depth: 1,
          searchDepth: 1,
        },
        highlight: {
          theme: {
            light: 'github-light',
            default: 'github-dark',
            dark: 'github-dark',
            sepia: 'monokai',
          },
        },
      },
    },
  },

  experimental: {
    typedPages: true,
  },

  compatibilityDate: '2025-07-15',
  vite: {
    $server: {
      build: {
        rollupOptions: {
          output: {
            preserveModules: true,
          },
        },
      },
    },
    plugins: [
      tailwindcss(),
    ],
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
    fonts: [
      'DM+Sans:100',
      'DM+Sans:200',
      'DM+Sans:300',
      'DM+Sans:400',
      'DM+Sans:500',
      'DM+Sans:600',
      'DM+Sans:700',
      'DM+Sans:800',
      'DM+Sans:900',
    ],
  },
  schemaOrg: {
    identity: definePerson({
      name: 'Favour Emeka',
      givenName: 'Favour',
      familyName: 'Emeka',
      additionalName: 'Chidera',
      alternateName: 'favorodera',

      image: '/avatar.png',
      description: 'Frontend Web Developer specializing in Vue.js, Nuxt.js and Typescript.',
      jobTitle: 'Frontend Web Developer',

      email: 'favorodera@gmail.com',
      url: 'https://favorodera.vercel.app/',
      sameAs: [
        'https://x.com/favorodera',
        'https://github.com/favorodera',
        'https://linkedin.com/in/favorodera',
        'https://facebook.com/favorodera',
        'https://wa.me/+2348024383756',
      ],
      gender: 'male',
    }),
  },
  
  seo: {
    redirectToCanonicalSiteUrl: true,
  },
})
