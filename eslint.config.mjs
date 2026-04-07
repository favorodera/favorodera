// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'
import betterTailwind from 'eslint-plugin-better-tailwindcss'

export default withNuxt()
  .append({
    plugins: {
      'better-tailwindcss': betterTailwind,
    },
    rules: { ...betterTailwind.configs['recommended-error'].rules },
    settings: {
      'better-tailwindcss': {
        entryPoint: './app/css/index.css',
      },
    },
  })
  .overrideRules({
    'better-tailwindcss/no-unregistered-classes': ['error', {
      detectComponentClasses: true,
    }],
    'better-tailwindcss/no-unknown-classes': ['error', {
      detectComponentClasses: true,
    }],
    '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
    '@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxEOF: 2, maxBOF: 0 }],
    '@stylistic/padded-blocks': 'off',
    '@stylistic/no-trailing-spaces': ['error', { skipBlankLines: true }],
    '@stylistic/brace-style': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/block-tag-newline': ['error', { multiline: 'ignore', singleline: 'ignore' }],
    'vue/multiline-html-element-content-newline': ['error', { allowEmptyLines: true, ignores: ['pre', 'textarea'] }],
    '@typescript-eslint/no-empty-object-type': [
      'error',
      { allowInterfaces: 'with-single-extends' },
    ],
  })
