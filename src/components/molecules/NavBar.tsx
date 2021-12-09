import { x } from '@xstyled/styled-components'
import Container from './Container'

const NavBar = () => {
  return (
    <x.header py={4}>
      <x.nav>
        <Container>
          <x.div display="flex" justifyContent="space-between">
            <x.div w={10} h={10} bg="gray-200" borderRadius="50%"></x.div>
            <x.div display="flex" spaceX={4}>
              <x.div w={10} h={10} bg="gray-200" borderRadius="50%"></x.div>
              <x.div w={10} h={10} bg="gray-200" borderRadius="50%"></x.div>
              <x.div w={10} h={10} bg="gray-200" borderRadius="50%"></x.div>
            </x.div>
          </x.div>
        </Container>
      </x.nav>
    </x.header>
  )
}

export default NavBar
