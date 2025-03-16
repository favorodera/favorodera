import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  theme: {
    fontFamily: {
      poppins: 'Poppins',
    },
  },
  extendTheme: theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      brand: {
        background: '#09090B',
        textGray: '#A1A1AA',
        textWhite: '#FAFAFA',
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
