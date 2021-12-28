import { useColorMode, x } from '@xstyled/styled-components'
import Container from './Container'
import { MarkGithubIcon } from '@primer/styled-octicons'
import Logo from './Logo'
import { useCallback } from 'react'
import ColorSwitcher from './ColorSwitcher'

export const HEADER_HEIGHT = 78

const NavBar = () => {
  const [colorMode, setColorMode] = useColorMode()
  const toggleColorMode = useCallback(() => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }, [colorMode, setColorMode])
  return (
    <x.header
      h={HEADER_HEIGHT}
      display="flex"
      alignItems="center"
      borderBottom="thin"
      borderColor="borders"
    >
      <x.nav w={1}>
        <Container>
          <x.div
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Logo
              iconOnly
              width={35}
              height={35}
              light={colorMode === 'dark'}
            />
            <x.div display="flex" spaceX={4}>
              <x.div border="thin" borderColor="links">
                <x.a
                  href="https://github.com/luigi-derson"
                  target="_blank"
                  rel="noreferrer norel"
                  title="Check my github profile"
                  p={1}
                  display="block"
                >
                  <MarkGithubIcon size="medium" verticalAlign="middle" />
                </x.a>
              </x.div>
              <ColorSwitcher onChange={toggleColorMode} colorMode={colorMode} />
            </x.div>
          </x.div>
        </Container>
      </x.nav>
    </x.header>
  )
}

export default NavBar
