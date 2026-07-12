import { factory } from '@favorodera/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

const resolvedFactory = factory({
  tailwind: {
    entryPoint: 'app/assets/css/index.css',
  },
})
  .append({
    rules: {
      'pnpm/json-enforce-catalog': 'off',
    },
  })
  .append({
    files: ['app/components/centoui/**'],
    rules: {
      'ts/no-explicit-any': 'off',
    },
  })

export default withNuxt(resolvedFactory)
