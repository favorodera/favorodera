// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  experimental: {
    asyncContext: true,
  },
  ssr: true,
  css: ['~/assets/scss/index.scss','@unocss/reset/normalize.css'],
  modules: [
    '@primevue/nuxt-module','@unocss/nuxt', '@pinia/nuxt', '@nuxt/eslint', '@nuxtjs/color-mode'
  ],
  colorMode: {
    preference: 'system',
    fallback: 'dark',
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storage: 'localStorage',
    storageKey: 'color-mode'
  },
  primevue: {
    components: {
      exclude:[]
    },
    options: {
        ripple: true,
        inputVariant: 'filled',
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'system',
                cssLayer: true
            }
        }
    }
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
      style: "width:100%; max-width:55rem"
    },
  },
})
