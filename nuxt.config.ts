// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  experimental: {
    asyncContext: true,
  },
  runtimeConfig: {
    firebaseServiceAccount: "",
  },
  ssr: true,
  css: ["~/assets/scss/index.scss", "@unocss/reset/normalize.css"],
  modules: [
    "@unocss/nuxt",
    "@nuxt/eslint",
    "@nuxt/ui"
  ],
  colorMode: {
    preference: "dark",
    fallback: "dark",
    storage: "localStorage",
    storageKey: "color-mode",
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
    },
  },
});
