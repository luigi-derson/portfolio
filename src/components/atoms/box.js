import styled from 'styled-components'
import {
  compose,
  space,
  color,
  layout,
  flexbox,
  position,
  system,
  typography,
} from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

export const Box = styled.div.withConfig({
  shouldForwardProp,
})(
  system({
    posX: {
      properties: ['left', 'rigth'],
      scale: 'space',
    },
    posY: {
      properties: ['top', 'bottom'],
      scale: 'space',
    },
    pos: {
      properties: ['top', 'right', 'bottom', 'left'],
      scale: 'space',
    },
  }),
  compose(space, color, layout, position, typography)
)

export const FlexBox = styled(Box)(
  {
    display: 'flex',
  },
  flexbox
)
