import styled from 'styled-components'
import { color, typography, compose, space } from 'styled-system'
import shouldForwardProp from '@styled-system/should-forward-prop'

const headings = {}

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

tags.forEach((element, index) => {
  const dec = index * 0.25
  const max = 2.5 - dec

  headings[element.toUpperCase()] = styled(element).withConfig({
    shouldForwardProp,
  })`
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 700;
    line-height: ${({ theme }) => theme.lineHeights.heading};
    font-size: ${1 * max}rem;
    ${compose(color, typography, space)}
  `
})

export const { H1, H2, H3, H4, H5, H6 } = headings
