import renderer from 'react-test-renderer'
import ComingSoon from 'components/pages/ComingSoon'

test('renders correctly', () => {
  const tree = renderer.create(<ComingSoon />).toJSON()
  expect(tree).toMatchSnapshot()
})
