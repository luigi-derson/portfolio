import styled from 'styled-components'
import { system } from '@xstyled/styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

export const Image = styled(GatsbyImage).withConfig({
  shouldForwardProp: prop =>
    [
      'image',
      'alt',
      'className',
      'as',
      'class',
      'imgClassName',
      'imgStyle',
      'backgroundColor',
      'objectFit',
      'objectPosition',
      'onLoad',
      'onError',
      'onStartLoad',
    ].includes(prop),
})`
  ${system}
`
