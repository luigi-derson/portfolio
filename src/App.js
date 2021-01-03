import { ThemeProvider } from 'styled-components'
// eslint-disable-next-line no-unused-vars
import { dark, light } from 'components/themes'
import GlobalStyles from 'components/GlobalStyles'

import ComingSoon from 'components/pages/ComingSoon'

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <ComingSoon />
    </ThemeProvider>
  )
}

export default App
