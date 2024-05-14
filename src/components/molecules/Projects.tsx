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
    [BLOCKS.HEADING_2]: function Heading2(_, children) {
      return (
        <Heading as="h2" fontSize="3xl" fontWeight={700} mb={10}>
          {children}
        </Heading>
      )
    },
    [BLOCKS.PARAGRAPH]: function Paragraph(_, children) {
      return (
        <Text as="p" mt={8} fontSize="xl">
          {children}
        </Text>
      )
    },
  },
}

export const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      contentfulSection(name: { eq: "Projects" }) {
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
