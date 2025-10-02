// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  extends: ['@favorodera/nuxt-helper'],
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@vaxee/nuxt',
    '@nuxt/content',
  ],
  imports: {
    dirs: ['./app/stores'],
  },
  devtools: { enabled: true },
  app: {
    rootTag: 'main',
    head: {
      htmlAttrs: { lang: 'en', dir: 'ltr' },
    },
    rootAttrs: {
      id: 'app',
    },
    pageTransition: { name: 'fade-out-in', mode: 'out-in' },
    layoutTransition: { name: 'fade-out-in', mode: 'out-in' },
  },
  css: ['~/assets/styles/index.css'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
    },
    build: {
      markdown: {
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
    viewTransition: true,
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
  icon: {
    mode: 'svg',
    customCollections: [
      { prefix: 'custom', dir: './app/assets/icons' },
    ],
  },
})
