import {
  ThemeProvider,
  Preflight,
  x,
  ColorModeProvider,
} from '@xstyled/styled-components'
import '@fontsource/poppins/600.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/roboto-mono/400.css'
import '@fontsource/roboto-mono/600.css'

import { theme } from '@themes'
import GlobalStyle from '@components/GlobalStyle'
import SEO from '@components/SEOComponent'
import { NavBar } from '@components/molecules/NavBar'
import { Footer } from '@components/molecules/Footer'

interface AppProps {
  children: React.ReactNode
  hideNavBar?: boolean
}

export const Layout = (props: AppProps) => {
  const { children, hideNavBar } = props
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <Preflight />
        <GlobalStyle />
        <SEO />
        {!hideNavBar && <NavBar />}
        <x.main>{children}</x.main>
        <Footer />
      </ColorModeProvider>
    </ThemeProvider>
  )
}
