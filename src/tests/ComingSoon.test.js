import renderer from 'react-test-renderer'
import ComingSoon from 'components/pages/ComingSoon'

import { ThemeProvider } from 'styled-components'
import { light } from 'components/themes'

test('renders correctly', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={light}>
        <ComingSoon />
      </ThemeProvider>
    )
    .toJSON()
  expect(tree).toMatchSnapshot()
})
