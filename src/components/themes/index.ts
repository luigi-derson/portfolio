import { defaultTheme, generateHexAlphaVariants, th } from '@xstyled/system'

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
      primary: '#140a82',
      secondary: '#f50a14',
    }),
    text: th.color('true-gray-900-a80'),
    headings: th.color('true-gray-900'),
    background: th.color('gray-50'),
    links: th.color('primary'),
    borders: th.color('true-gray-900'),
    modes: {
      dark: {
        text: th.color('gray-50-a70'),
        background: th.color('true-gray-900'),
        headings: th.color('gray-50'),
        links: th.color('indigo-400'),
        borders: th.color('gray-50'),
      },
    },
  },
  borders: {
    thin: '2px solid',
  },
}

export default theme
