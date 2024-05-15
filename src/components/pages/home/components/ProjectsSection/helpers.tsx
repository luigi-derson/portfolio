import { Options } from '@contentful/rich-text-react-renderer'
import { BLOCKS } from '@contentful/rich-text-types'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import { Heading } from '@components/atoms/Heading'
import { Text } from '@components/atoms/Text'

export const rendererOptions: Options = {
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
