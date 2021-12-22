import { useColorMode, x } from '@xstyled/styled-components'
import Container from './Container'
import { MarkGithubIcon, MoonIcon, SunIcon } from '@primer/styled-octicons'
import Logo from './Logo'
import { useCallback } from 'react'

export const HEADER_HEIGHT = 78

const NavBar = () => {
  const [colorMode, setColorMode] = useColorMode()
  const toggleColorMode = useCallback(() => {
    setColorMode(colorMode === 'default' ? 'dark' : 'default')
  }, [colorMode, setColorMode])
  return (
    <x.header h={HEADER_HEIGHT} display="flex" alignItems="center">
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
              <x.a
                href="https://github.com/luigi-derson"
                target="_blank"
                rel="noreferrer norel"
                title="Check my github profile"
              >
                <MarkGithubIcon size="medium" verticalAlign="middle" />
              </x.a>
              <x.button
                background="transparent"
                type="button"
                onClick={toggleColorMode}
                color="links"
                outline={{ focus: 'none' }}
              >
                {colorMode === 'default' ? (
                  <MoonIcon size="medium" verticalAlign="middle" />
                ) : (
                  <SunIcon size="medium" verticalAlign="middle" />
                )}
              </x.button>
            </x.div>
          </x.div>
        </Container>
      </x.nav>
    </x.header>
  )
}

export default NavBar
