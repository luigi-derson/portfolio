import { MarkGithubIcon, MailIcon, PeopleIcon } from '@primer/styled-octicons'
import { useStaticQuery, graphql } from 'gatsby'

import { Heading } from '@components/atoms/Heading'
import logoSVG from '@src/images/luigi-derson-logo.svg'

import { Text } from '@components/atoms/Text'
import { x } from '@xstyled/styled-components'
import Container from '@components/molecules/Container'

const ComingSoon = () => {
  const data = useStaticQuery(graphql`
    query {
      desktop: file(
        relativePath: { eq: "pawel-czerwinski-GHLapgsw0dg-unsplash.jpg" }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imgData = data.desktop.childImageSharp.fluid

  const backgroundFluidImageStack = [
    `url(${imgData.srcWebp})`,
    `linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.45) 100%)`,
  ]
  // image background by @pawel_czerwinski

  return (
    <x.div
      backgroundImage={backgroundFluidImageStack.join(',')}
      h={1}
      display="flex"
      flexDirection="column"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Container textAlign="center" flexGrow={2}>
        <x.div
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          h={1}
        >
          <x.div my={4}>
            <x.img
              h={14}
              src={logoSVG}
              height="56px"
              width="56px"
              alt="Luigi Derson Logo"
            />
          </x.div>
          <Heading
            as="h2"
            color="#32cd32"
            fontSize={{ _: 'xl', md: '3xl' }}
            fontFamily="mono"
            fontWeight="400"
            mb={4}
          >
            &gt; Comitting changes...
          </Heading>
          <Text as="p" color="white" fontWeight={300}>
            Building a new visual experience
          </Text>
        </x.div>
      </Container>
      <x.div
        as="footer"
        textAlign="center"
        flexDirection="column"
        justifyContent="space-around"
        py={{ _: 4, md: 6 }}
      >
        <x.ul
          display="flex"
          justifyContent="center"
          alignItems="center"
          spaceX={4}
        >
          <li>
            <a
              href="mailto:luigi.prodesign@gmail.com"
              target="_blank"
              rel="noreferrer norel"
              title="Send me an email"
            >
              <MailIcon size={24} color="#32cd32" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luigi-derson"
              target="_blank"
              rel="noreferrer norel"
              title="Check my github profile"
            >
              <MarkGithubIcon size={23} color="#32cd32" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/luigi-sanchez-731b72182/"
              target="_blank"
              rel="noreferrer norel"
              title="Check my Linkedin profile"
            >
              <PeopleIcon size={23} color="#32cd32" />
            </a>
          </li>
        </x.ul>
      </x.div>
    </x.div>
  )
}

export default ComingSoon
