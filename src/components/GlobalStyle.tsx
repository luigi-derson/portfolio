import { createGlobalStyle } from '@xstyled/styled-components'

const GlobalStyles = createGlobalStyle`
html,
body,
#___gatsby,
#gatsby-focus-wrapper {
  height: 100%;
}
body {
  font-family: sans;
  line-height: 1.4;
}
`

export default GlobalStyles
