import { Heading } from '@components/atoms/Heading'
import { x } from '@xstyled/styled-components'
import { graphql, useStaticQuery } from 'gatsby'
import Container from './Container'
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { Options } from '@contentful/rich-text-react-renderer'
import { Text } from '@components/atoms/Text'

const options: Options = {
  renderNode: {
    [BLOCKS.HEADING_1]: function HeroHeading(_, children) {
      return (
        <Heading fontSize="4xl" mb={2}>
          {children}
        </Heading>
      )
    },
    [BLOCKS.HEADING_2]: function RoleHeading(_, children) {
      return (
        <Heading
          style={{
            WebkitTextFillColor: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            backgroundColor: '#000',
            backgroundImage: `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`,
            backgroundSize: '100%',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
          }}
          as="h2"
          fontSize="3xl"
          fontWeight={700}
          mb={10}
        >
          {children}
        </Heading>
      )
    },
    [BLOCKS.HEADING_3]: function IntroHeading(_, children) {
      return (
        <Heading as="h3" fontSize="2xl" fontFamily="sans" fontWeight={500}>
          {children}
        </Heading>
      )
    },
    [BLOCKS.PARAGRAPH]: function HeroParagraph(_, children) {
      return (
        <Text as="p" mt={8} fontSize="xl" fontWeight={400}>
          {children}
        </Text>
      )
    },
  },
}

const HomeHero = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSection(name: { eq: "Hero" }) {
        name
        content {
          raw
        }
      }
    }
  `)

  return (
    <x.section>
      <Container>
        <x.div py={10} maxW={680}>
          {data.contentfulSection.content &&
            renderRichText(data.contentfulSection.content, options)}
        </x.div>
      </Container>
    </x.section>
  )
}

export default HomeHero
