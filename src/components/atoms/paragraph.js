import styled from 'styled-components'
import {
  typography,
  space,
  color,
  position,
  display,
  compose,
} from 'styled-system'

const Paragraph = styled.p(compose(typography, space, color, position, display))

export default Paragraph
