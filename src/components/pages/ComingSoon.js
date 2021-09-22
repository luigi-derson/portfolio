import React from 'react'
import styled from 'styled-components'
import { MarkGithubIcon, MailIcon, PeopleIcon } from '@primer/styled-octicons'
import { useStaticQuery, graphql } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

import { H2 } from '@components/atoms/headings'
import { Box, FlexBox } from '@components/atoms/box'

import logo from '@src/images/luigi-derson_logo.svg'

import Text from '@components/atoms/text'
import Paragraph from '@components/atoms/paragraph'

const PageBackground = ({ children, className }) => {
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
    `linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.45) 100%)`,
    imgData,
  ]

  return (
    <BackgroundImage
      className={className}
      Tag="main"
      fluid={backgroundFluidImageStack}
      backgroundColor="#000"
    >
      {children}
    </BackgroundImage>
  )
}

const ComingSoon = () => {
  return (
    <StyledPageBackground>
      <Section>
        <FlexBox
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <Box my={4}>
            <img height="60px" src={logo} alt="Luigi Derson Logo" />
          </Box>
          <H2
            color="green"
            fontSize={[3, 3, 4, 4]}
            fontFamily="mono"
            fontWeight="regular"
            mb="4"
          >
            &gt; Comitting changes...
          </H2>
          <Paragraph>Building a new visual experience</Paragraph>
        </FlexBox>
      </Section>
      <Box
        as="footer"
        textAlign="center"
        flexDirection="column"
        justifyContent="space-around"
        py={[1, 2, 3]}
      >
        <IconList as="ul" justifyContent="center" alignItems="center">
          <li>
            <a
              href="mailto:luigi.prodesign@gmail.com"
              target="_blank"
              rel="noreferrer norel"
              title="Send me an email"
            >
              <MailIcon size={24} color="green" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/luigi-derson"
              target="_blank"
              rel="noreferrer norel"
              title="Check my github profile"
            >
              <MarkGithubIcon size={23} color="green" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/luigi-sanchez-731b72182/"
              target="_blank"
              rel="noreferrer norel"
              title="Check my Linkedin profile"
            >
              <MarkGithubIcon size={23} color="green" />
            </a>
          </li>
        </IconList>
      </Box>
      <Text display="block" textAlign="right" fontSize="xs" py="2" pr="3">
        Background by{' '}
        <a
          href="https://unsplash.com/@pawel_czerwinski"
          target="_blank"
          rel="noreferrer norel"
          title="Pawel Czerwinski unsplash profile"
        >
          Paweł Czerwiński
        </a>
      </Text>
    </StyledPageBackground>
  )
}

export default ComingSoon

const Section = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  flex-grow: 2;
`

const IconList = styled(FlexBox)`
  list-style: none;
  padding: 0;
  margin-bottom: 0;

  & > li {
    padding: 0 ${({ theme }) => theme.space[3]};
  }
`

const StyledPageBackground = styled(PageBackground)`
  height: 100%;
  display: flex;
  flex-direction: column;

  &::before,
  &::after {
    /* filter: blur(1px); */
  }
`
