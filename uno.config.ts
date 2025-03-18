import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  theme: {
    fontFamily: {
      anuphan: 'Anuphan',
    },
  },
  extendTheme: theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      brand: {
        background: '#151615',
        textGray: '#b4b6b8',
        link: '#6eb8ff',
        text: '#DBDFDF',
        elevate: '#27272A',
      },
    },
  }),
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
        // ...
      },
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        // ...
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})
