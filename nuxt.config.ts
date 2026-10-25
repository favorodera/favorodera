import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'
import { definePerson } from 'nuxt-schema-org/schema'

export default defineNuxtConfig({
  alias: {
    '#data': fileURLToPath(new URL('data', import.meta.url)),
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { href: '/favicon.ico', rel: 'icon', type: 'image/x-icon' },
        { href: '/icon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
        { href: '/icon-192x192.png', rel: 'icon', sizes: '192x192', type: 'image/png' },
        { href: '/icon-512x512.png', rel: 'icon', sizes: '512x512', type: 'image/png' },
        { href: '/favicon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
        { href: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
      ],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  compatibilityDate: '2026-06-21',
  css: ['~/assets/css/index.css'],
  devtools: { enabled: false },
  eslint: {
    config: {
      standalone: false,
    },
  },
  fonts: {
    defaults: {
      weights: [200, 300, 400, 500, 600, 700],
    },
    families: [{ global: true, name: 'Outfit' }],
  },
  modules: [
    '@nuxtjs/color-mode',
    '@nuxt/image',
    '@nuxt/fonts',
    'reka-ui/nuxt',
    'motion-v/nuxt',
    '@nuxtjs/seo',
    '@vercel/analytics',
    '@nuxt/eslint',
  ],
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
  ogImage: {
    zeroRuntime: true,
  },
  schemaOrg: {
    identity: definePerson({
      additionalName: 'Chidera',
      alternateName: 'Favour Chidera Emeka',
      alumniOf: {
        '@type': 'EducationalOrganization',
        'name': 'Alt School Africa',
        'url': 'https://altschoolafrica.com/',
      },
      description: 'Frontend engineer and open-source creator building type-safe interfaces and developer tools with Vue, Nuxt, and TypeScript. Creator of NotForm, and other open-source tools for developers.',
      email: 'favorodera@gmail.com',
      familyName: 'Emeka',
      gender: 'male',
      givenName: 'Favour',
      image: 'https://github.com/favorodera.png',
      jobTitle: 'Frontend Engineer',
      knowsAbout: [
        'Frontend Development',
        'Vue.js',
        'Nuxt.js',
        'TypeScript',
        'Tailwind CSS',
      ],
      name: 'Favour Emeka',
      sameAs: [
        'https://x.com/favorodera',
        'https://github.com/favorodera',
        'https://linkedin.com/in/faorodera',
        'https://facebook.com/favorodera',
        'https://wa.me/+2348024383756',
      ],
      url: 'https://favorodera.vercel.app',
    }),
  },
  site: {
    defaultLocale: 'en',
    description: 'Frontend engineer building fast, quiet interfaces with Vue, Nuxt & TypeScript. Creator of NotForm, and other open-source tools for developers.',
    indexable: true,
    name: 'Favour Emeka | Frontend Engineer',
    url: 'https://favorodera.vercel.app',
  },
  sitemap: {
    zeroRuntime: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
