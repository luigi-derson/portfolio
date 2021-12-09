import { Heading } from '@components/atoms/Heading'
import { x } from '@xstyled/styled-components'
import Container from './Container'

const HomeHero = () => {
  return (
    <x.section>
      <Container>
        <x.div py={4} textAlign="center">
          <Heading fontSize="3xl" mb={2}>
            Hi 👋 I'm Luigi
          </Heading>
          <Heading as="h2" fontSize="2xl" fontFamily="mono" fontWeight={600}>
            Front-end Developer
          </Heading>
        </x.div>

        <x.p mt={4} fontSize="lg">
          I'm a self-taught software developer with a graphic and industrial
          design background. I started in this industry in 2018, from designning
          websites and creating wireframes to building user-friendly,
          accessible, responsive and component based web applications.
        </x.p>
        <x.p mt={4} fontSize="lg">
          I'm currently working as a Front-end Developer at Veo, a sustainable
          and eco-friendly Marketplace based in Manchester, United Kingdom.
        </x.p>
      </Container>
    </x.section>
  )
}

export default HomeHero
