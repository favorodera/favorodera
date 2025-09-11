// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxtjs/seo',
    '@nuxt/image',
    '@nuxt/content',
  ],
  devtools: { enabled: true },
  app: {
    rootTag: 'main',
    rootAttrs: {
      id: 'app',
    },
  },
  css: ['~/assets/styles/index.css'],
  site: {
    url: 'https://favorodera.vercel.app/',
    name: 'Favour Emeka',
  },
  content: {
    preview: {
      dev: true,
      api: 'https://api.nuxt.studio',
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  compatibilityDate: '2025-07-15',
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  ogImage: {
    googleFontMirror: true,
    fonts: [
      'Quantico:400',
      'Quantico:700',
    ],
  },
})
