/* Utils */
const base = 16

/* Functions */
const pxToRem = n => `${n / base}rem`
const listToRem = v => pxToRem(v)

// Spaces
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map(listToRem)

//  Breakpoints
const breakpoints = [0, 576, 768, 992, 1200, 1400]

// Font sizes
const fontSizes = [14, 16, 20, 32, 48].map(listToRem)
fontSizes.body = fontSizes[1]
fontSizes.sm = fontSizes[0]
fontSizes.lg = fontSizes[2]

// Font weights
const fontWeights = [400, 600]
fontWeights.body = fontWeights[0]

// Line heights
const lineHeights = [1.2, 1.5, 2]
lineHeights.base = lineHeights[1]
lineHeights.heading = lineHeights[0]

// Colors
export const colors = {
  blue: '#140a82',
  red: '#f50a14',
  black: '#000',
  white: '#fff',
}

colors.primary = colors.blue
colors.accent = colors.red

// Default light theme
colors.fg = colors.black
colors.bg = colors.white

const theme = {
  colors,
  space,
  breakpoints,
  lineHeights,
  fontSizes,
  fontWeights,
}

export default theme
