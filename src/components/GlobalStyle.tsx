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
  transition: background-color 500ms cubic-bezier(0.33, 1, 0.68, 1), color 300ms ease;
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
  opacity: 0.65;
  transition: opacity 1000ms cubic-bezier(0.12, 0, 0.39, 0);
}

.mesh-gradient-image--dark {
  transition: opacity 300ms cubic-bezier(0.12, 0, 0.39, 0);
  opacity: 0;
}
`

export default GlobalStyles
