import { Heading } from '@components/atoms/Heading'
import { x } from '@xstyled/styled-components'
import Container from './Container'

const HomeHero = () => {
  return (
    <x.section>
      <Container>
        <Heading fontSize="3xl">Hi 👋, I'm Luigi</Heading>
        <x.p>Front-end Developer</x.p>
        <x.p>
          I'm a funny but shy guy that loves to create good-looking things. I've
          been working in workspaces that use vanilla javascript, jQuery or
          React / Vue. Although I have more experience with React.
        </x.p>
      </Container>
    </x.section>
  )
}

export default HomeHero
