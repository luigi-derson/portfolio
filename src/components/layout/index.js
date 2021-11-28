import React from 'react'
import { ThemeProvider } from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { dark, light } from '@components/themes'
import GlobalStyles from '@components/GlobalStyles'
import SEO from '@components/seo'

function App({ children }) {
  return (
    <ThemeProvider theme={dark}>
      <SEO />
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default App
