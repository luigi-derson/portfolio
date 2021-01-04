/* Utils */
const base = 16

/* Functions */
const pxToRem = n => `${n / base}rem`
const listToRem = v => (v ? pxToRem(v) : v)

// Spaces
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512].map(listToRem)

//  Breakpoints
const breakpoints = [0, 576, 768, 992, 1200, 1400]

// Font families
const fonts = {
  base:
    '-apple-system, BlinkMacSystemFont, "Work Sans", "Segoe UI", Helvetica, Arial, "Roboto", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  mono:
    'SFMono-Regular, Consolas, "Roboto Mono", Menlo, "Ubuntu Mono", monospace',
  display:
    'Raleway, -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Segoe UI", Oxygen, Ubuntu, Cantarell, "Open Sans", sans-serif',
}

// Font sizes
const fontSizes = [12, 14, 16, 20, 32, 48].map(listToRem)
fontSizes.xs = fontSizes[0]
fontSizes.sm = fontSizes[1]
fontSizes.body = fontSizes[2]
fontSizes.lg = fontSizes[3]

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
  green: '#32cd32',
}

colors.primary = colors.blue
colors.accent = colors.red

// Default light theme
colors.fg = colors.black
colors.bg = colors.white

const theme = {
  fonts,
  colors,
  space,
  breakpoints,
  lineHeights,
  fontSizes,
  fontWeights,
}

export default theme
