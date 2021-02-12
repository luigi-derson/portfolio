import React from 'react'
import { ThemeProvider } from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { dark, light } from '@components/themes'
import GlobalStyles from '@components/GlobalStyles'

function App({ children }) {
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}

export default App
