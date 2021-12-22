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
  color: text;
  background-color: background;
}

h1, h2, h3, h4, h5, h6 {
  color: headings;
}

a {
  color: links;
}

.mesh-gradient-image {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}

.mesh-gradient-image--default {
  opacity: 0.85;
}

.mesh-gradient-image--dark {
  opacity: 0.10;
}
`

export default GlobalStyles
