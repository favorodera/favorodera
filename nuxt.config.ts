import tailwindcss from '@tailwindcss/vite'
import { definePerson } from 'nuxt-schema-org/schema'
import { profile } from './app/data/profile'
import { seo } from './app/data/seo'
import { socials } from './app/data/socials'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { href: '/favicon.ico', rel: 'icon', type: 'image/x-icon' },
        { href: '/icon-16x16.png', rel: 'icon', sizes: '16x16', type: 'image/png' },
        { href: '/icon-32x32.png', rel: 'icon', sizes: '32x32', type: 'image/png' },
        { href: '/icon-192x192.png', rel: 'icon', sizes: '192x192', type: 'image/png' },
        { href: '/icon-512x512.png', rel: 'icon', sizes: '512x512', type: 'image/png' },
        { href: '/apple-touch-icon.png', rel: 'apple-touch-icon', sizes: '180x180' },
      ],
    },
  },
  colorMode: {
    classSuffix: '',
  },
  compatibilityDate: '2026-06-21',
  css: ['~/assets/tailwind.css'],
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
    },
  },
  fonts: {
    families: [{ global: true, name: 'Outfit', weights: ['400 ', ' 500', '600'] }],
  },
  modules: [
    '@nuxt/fonts',
    '@nuxt/image',

    '@nuxtjs/color-mode',
    'reka-ui/nuxt',

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
  routeRules: {
    '/resume': { redirect: { statusCode: 302, to: profile.resumeUrl } },
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
      description: seo.personDescription,
      email: profile.email,
      familyName: 'Emeka',
      gender: 'male',
      givenName: 'Favour',
      image: `${seo.url}/avatar.png`,
      jobTitle: profile.role,
      knowsAbout: seo.knowsAbout,
      name: profile.name,
      sameAs: socials.map((social) => {
        return social.url
      }),
      url: seo.url,
    }),
  },
  site: {
    defaultLocale: 'en',
    description: seo.description,
    indexable: true,
    name: profile.name,
    url: seo.url,
  },
  sitemap: {
    zeroRuntime: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
})
