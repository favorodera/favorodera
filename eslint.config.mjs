// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import favoroderaConfig from '@favorodera/nuxt-eslint-config'
import betterTailwind from 'eslint-plugin-better-tailwindcss'

export default withNuxt()
  .append(favoroderaConfig)
  .append({
    plugins: {
      'better-tailwindcss': betterTailwind,
    },
    rules: { ...betterTailwind.configs['recommended-error'].rules },
    settings: {
      'better-tailwindcss': {
        entryPoint: './app/assets/css/app.css',
      },
    },
  })
  .overrideRules({
    'better-tailwindcss/no-unregistered-classes': 'off',
  })
