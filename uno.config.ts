import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'

export default defineConfig({
  theme: {
    fontFamily: {
      inter: 'Inter',
    },
  },
  extendTheme: theme => ({
    ...theme,
    colors: {
      ...theme.colors,
      brand: {
        textGrayDark: '#c0c0c0',
        textGrayLight: '#666d80',
        textBlackLight: '353849',
        backgroundDark: '#161616',
        elevateDark: '#212121',
        elevateDark37: '#373737',
        elevateDark2C: '#2c2c2c',
        backgroundLight: '#eceff3',
        elevateLight: '#ffffff',
        elevateLightF6: '#f6f8fa',
        elevateLight0D: '#0d0d12',
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
