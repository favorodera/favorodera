import { factory } from '@favorodera/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

const resolvedFactory = factory({
  tailwind: {
    entryPoint: 'app/assets/css/index.css',
  },
  test: false,
})

export default withNuxt(resolvedFactory)
