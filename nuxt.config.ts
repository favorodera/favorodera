// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxt/eslint',
    '@unocss/nuxt',
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
  ],
  ssr: true,
  components: [
    {
      path: '~/components/content-components',
      global: true,
      pathPrefix: true,
      prefix: 'Content',
    },
  ],
  devtools: { enabled: false },
  app: {
    rootTag: 'main',
    rootAttrs: {
      id: 'app',
    },
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  css: ['~/index.css'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
    renderer: {
      anchorLinks: true,
    },
  },
  experimental: {
    payloadExtraction: true,
  },
  compatibilityDate: '2024-11-01',
  eslint: {
    config: {
      stylistic: true,
    },
  },
  fonts: {
    provider: 'google',
    defaults: {
      weights: [400, 500, 600, 700, 800, 900],
      styles: ['normal', 'italic'],
    },
  },
  icon: {
    componentName: 'NuxtIcon',
  },
  unocss: {
    nuxtLayers: true,
  },
})
