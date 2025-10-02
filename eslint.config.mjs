import withNuxt from './.nuxt/eslint.config.mjs'
import config from '@favorodera/nuxt-eslint-config'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import tailwind from 'eslint-plugin-tailwindcss'

const urlToPath = fileURLToPath(import.meta.url)
const dir = dirname(urlToPath)

export default withNuxt(config).append(
  tailwind.configs['flat/recommended'],
  {
    settings: {
      tailwindcss: {
        config: `${dir}/app/assets/styles/index.css`,
      },
    },
  },
)
