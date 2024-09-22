// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  experimental: {
    asyncContext: true,
  },
  ssr: true,
  css: ['~/assets/scss/index.scss','@unocss/reset/normalize.css'],
  modules: [
    '@primevue/nuxt-module','@unocss/nuxt', '@pinia/nuxt', '@nuxt/eslint'
  ],
  primevue: {

  },
  unocss: {
    nuxtLayers: true,
  },
  eslint: {
    config: {
      stylistic: true,
    },
  },
  app: {
    layoutTransition: { name: "layout", mode: "out-in" },
    pageTransition: { name: "page", mode: "out-in" },
    rootTag: "main",
    rootAttrs: {
      id: "app",
      style: "width:100%; max-width:90rem"
    },

  },
})
