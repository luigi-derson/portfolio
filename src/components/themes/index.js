import theme, { colors } from './theme'

// Dark theme
const dark = { ...theme, colors: { ...colors } }

dark.colors.fg = colors.white
dark.colors.bg = colors.black

export { theme as light, dark }
