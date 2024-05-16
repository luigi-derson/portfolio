import { Link } from '@components/atoms/Link'
import { x } from '@xstyled/styled-components'

export const Footer = () => {
  return (
    <x.div py={8} px={4}>
      <x.p textAlign="center">
        © {new Date().getFullYear()} — Luigi Sanchez. Built with{' '}
        <Link
          href="https://www.gatsbyjs.com/"
          target="_blank"
          rel="noreferrer norel"
        >
          Gatsby
        </Link>{' '}
        and{' '}
        <Link
          href="https://www.contentful.com/"
          target="_blank"
          rel="noreferrer norel"
        >
          Contentful
        </Link>
        . Deployed on{' '}
        <Link
          href="https://www.cloudflare.com/"
          target="_blank"
          rel="noreferrer norel"
        >
          Cloudflare
        </Link>
        .
      </x.p>
    </x.div>
  )
}
