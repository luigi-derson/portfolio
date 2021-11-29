import {
  defaultTheme,
  generateHexAlphaVariants,
  aliasColor,
} from '@xstyled/system'

const fallbackSansFonts = 'ui-sans-serif, system-ui, -apple-system, sans-serif'

const theme = {
  ...defaultTheme,
  fonts: {
    display: `Poppins, ${fallbackSansFonts}`,
    sans: `Inter, ${fallbackSansFonts}`,
    mono: `SFMono-Regular, Menlo, 'Roboto Mono', ui-monospace, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
  },
  colors: {
    ...defaultTheme.colors,
    ...generateHexAlphaVariants({
      'dark-blue': '#140a82',
      'dark-red': '#f50a14',
    }),
    ...aliasColor('primary', 'dark-blue'),
    ...aliasColor('secondary', 'dark-red'),
  },
}

export default theme
