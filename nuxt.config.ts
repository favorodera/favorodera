// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  extends: ['@favorodera/nuxt-helper'],
  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/eslint',
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
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'icon', href: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
        { rel: 'icon', href: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      ],
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
    renderer: {
      anchorLinks: false,
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
    customCollections: [
      { prefix: 'custom', dir: './app/assets/icons' },
    ],
  },
})
