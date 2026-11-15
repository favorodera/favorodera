import { defineConfig } from '@favorodera/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

const config = defineConfig({
  tailwind: {
    settings: {
      entryPoint: 'app/assets/tailwind.css',
    },
  },
  vitest: false,
})

export default withNuxt(config)
