import { IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { useStaticQuery, graphql } from 'gatsby'
import { x } from '@xstyled/styled-components'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import { Heading } from '@components/atoms/Heading'

import { Container } from '../../../../molecules/Container'
import { rendererOptions } from './helpers'
import { ProjectsSectionQuery } from './ProjectsSection.types'
import { Image } from '@components/atoms/Image'
import { LinkExternalIcon } from '@primer/styled-octicons'

export const ProjectsSection = () => {
  const data = useStaticQuery<ProjectsSectionQuery>(graphql`
    {
      contentfulSection(name: { eq: "Projects" }) {
        name
        content {
          raw
        }
      }
      allContentfulProject {
        nodes {
          id
          title
          images {
            gatsbyImageData(
              width: 800
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
            url
            title
            description
          }
          link
          status
          technologies
          description {
            description
          }
          slug
        }
      }
    }
  `)

  let image: IGatsbyImageData | undefined
  if (data.allContentfulProject?.nodes?.[0]?.images?.[0]) {
    // @ts-ignore
    image = getImage(data.allContentfulProject.nodes[0].images[0])
  }

  return (
    <x.section>
      <Container>
        <x.div py={10}>
          <x.div>
            {data.contentfulSection.content &&
              // @ts-ignore
              renderRichText(data.contentfulSection.content, rendererOptions)}
          </x.div>
          <x.div display="flex" mt={4}>
            {data.allContentfulProject.nodes.map(project => {
              const alt = project.images?.[0]?.title ?? project.title
              return (
                <x.div
                  key={project.id}
                  w={{ _: '100%', md: '50%', lg: '33.33%' }}
                >
                  {image && (
                    <Image
                      image={image}
                      alt={alt ?? ''}
                      border="thin"
                      borderColor="borders"
                      boxShadow="default"
                    />
                  )}
                  {project.technologies && (
                    <x.div display="flex" mt={4}>
                      {project.technologies.map(tech => (
                        <x.div
                          key={tech}
                          bg="true-gray-900"
                          color="white"
                          px={2}
                          py={0.5}
                          mr={2}
                          fontWeight={200}
                          fontSize="xs"
                          fontFamily="mono"
                        >
                          {tech}
                        </x.div>
                      ))}
                    </x.div>
                  )}
                  <x.div mt={4}>
                    <x.div display="flex" alignItems="center" mb={2}>
                      <Heading as="h3" fontSize="2xl">
                        {project.title}
                      </Heading>
                      <x.div
                        w={2}
                        h={2}
                        bg="green-400"
                        borderRadius="full"
                        ring={2}
                        ringColor="green-300"
                        ml={4}
                      />
                    </x.div>

                    {project.description && (
                      <x.p fontSize="xl">{project.description.description}</x.p>
                    )}
                    {project.link && (
                      <x.a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer norel"
                        fontWeight={500}
                        display="inline-block"
                        mt={4}
                      >
                        {project.link.split('//')[1]}
                        <LinkExternalIcon ml={2} />
                      </x.a>
                    )}
                  </x.div>
                </x.div>
              )
            })}
          </x.div>
        </x.div>
      </Container>
    </x.section>
  )
}
