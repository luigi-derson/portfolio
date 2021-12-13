import { ThemeProvider, Preflight, x } from '@xstyled/styled-components'
import theme from '@components/themes'
import GlobalStyle from '@components/GlobalStyle'
import SEO from '@components/seo'
import NavBar from '@components/molecules/NavBar'
import '@fontsource/poppins/600.css'
import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/500.css'
import '@fontsource/inter/700.css'
import '@fontsource/roboto-mono/400.css'
import '@fontsource/roboto-mono/600.css'

interface AppProps {
  children: React.ReactNode
  hideNavBar?: boolean
}

function App({ children, hideNavBar = false }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <GlobalStyle />
      <SEO />
      {!hideNavBar && <NavBar />}
      <x.main>{children}</x.main>
    </ThemeProvider>
  )
}

export default App
