import { x } from '@xstyled/styled-components'

import { Heading } from '@components/atoms/Heading'
import { Layout } from '@components/layout'
import { Container } from '@components/molecules/Container'

export default function NotFoundPage() {
  return (
    <Layout>
      <Container>
        <x.div py={8}>
          <Heading fontSize="3xl">NOT FOUND</Heading>
          <x.p mt={4} fontSize="xl">
            You just hit a route that does not exist... the sadness.
          </x.p>
        </x.div>
      </Container>
    </Layout>
  )
}
