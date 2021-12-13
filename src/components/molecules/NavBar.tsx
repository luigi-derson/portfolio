import { x } from '@xstyled/styled-components'
import Container from './Container'
import { MarkGithubIcon, SunIcon } from '@primer/styled-octicons'
import Logo from './Logo'

export const HEADER_HEIGHT = 78

const NavBar = () => {
  return (
    <x.header h={HEADER_HEIGHT} display="flex" alignItems="center">
      <x.nav w={1}>
        <Container>
          <x.div
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Logo iconOnly width={35} height={35} />
            <x.div display="flex" spaceX={4}>
              <x.div color="gray-300">
                <SunIcon size="medium" verticalAlign="middle" />
              </x.div>
              <x.a
                href="https://github.com/luigi-derson"
                target="_blank"
                rel="noreferrer norel"
                title="Check my github profile"
                color={{ hover: 'dark-red' }}
              >
                <MarkGithubIcon size="medium" verticalAlign="middle" />
              </x.a>
            </x.div>
          </x.div>
        </Container>
      </x.nav>
    </x.header>
  )
}

export default NavBar
