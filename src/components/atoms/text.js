import styled from 'styled-components'
import {
  typography,
  space,
  color,
  position,
  display,
  compose,
} from 'styled-system'

const Text = styled.span(compose(typography, space, color, position, display))

export default Text
