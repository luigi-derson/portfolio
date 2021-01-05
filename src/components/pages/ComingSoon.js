import React from 'react'
import styled from 'styled-components'
import { MarkGithubIcon, MailIcon } from '@primer/styled-octicons'

import { H2 } from 'components/atoms/headings'
import { Box, FlexBox } from 'components/atoms/box'

import logo from 'assets/luigi-derson_logo.svg'
import bgimage from 'assets/pawel-czerwinski-GHLapgsw0dg-unsplash-optimized.jpg'
import Text from 'components/atoms/text'
import Paragraph from 'components/atoms/paragraph'

const FOOTER_HEIGHT = `${80 / 16}em`

const ComingSoon = () => {
  return (
    <>
      <Box
        width={1}
        height="100%"
        position="absolute"
        pos="0"
        overflow="hidden"
        textAlign="center"
        bg="black"
        zIndex="-1"
      >
        <BgImg src={bgimage} />
      </Box>
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
          <H2 color="green" fontFamily="mono" fontWeight="regular" mb="4">
            &gt; Comitting changes...
          </H2>
          <Paragraph>Building a new visual experience</Paragraph>
        </FlexBox>
      </Section>
      <Footer
        as="footer"
        textAlign="center"
        flexDirection="column"
        justifyContent="space-around"
      >
        <IconList as="ul" justifyContent="center" alignItems="center">
          <li>
            <a href="http://www.luigiderson.dev">
              <MailIcon size={24} color="green" />
            </a>
          </li>
          <li>
            <a href="http://www.luigiderson.dev">
              <MarkGithubIcon size={23} color="green" />
            </a>
          </li>
        </IconList>

        <Text display="block" fontSize="xs" mb={1}>
          Background by{' '}
          <a
            href="https://unsplash.com/@pawel_czerwinski"
            target="_blank"
            rel="noreferrer norel"
          >
            Paweł Czerwiński
          </a>
        </Text>
      </Footer>
    </>
  )
}

export default ComingSoon

const Section = styled.section`
  height: calc(100vh - ${FOOTER_HEIGHT});
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const Footer = styled(FlexBox)`
  height: ${FOOTER_HEIGHT};
`

const IconList = styled(FlexBox)`
  list-style: none;
  margin: 0;
  padding: 0;
  & > li {
    padding: 0 ${({ theme }) => theme.space[3]};
  }
`

const BgImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: opacity(0.6);
`
