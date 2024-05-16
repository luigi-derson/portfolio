import { useStaticQuery, graphql } from 'gatsby'
import { x } from '@xstyled/styled-components'
import { renderRichText } from 'gatsby-source-contentful/rich-text'

import { Container } from '@components/molecules/Container'

import { rendererOptions } from './helpers'
import { ProjectsSectionQuery } from './ProjectsSection.types'
import { ProjectItem } from './components'

export const ProjectsSection = () => {
  const data = useStaticQuery<ProjectsSectionQuery>(graphql`
    {
      contentfulSection(name: { eq: "Projects" }) {
        name
        content {
          raw
        }
      }
      allContentfulProject(sort: { fields: order, order: ASC }) {
        nodes {
          id
          title
          images {
            gatsbyImageData(
              width: 1000
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

  return (
    <x.section>
      <Container>
        <x.div py={10}>
          <x.div>
            {data.contentfulSection.content &&
              // @ts-ignore
              renderRichText(data.contentfulSection.content, rendererOptions)}
          </x.div>
          <x.div
            display="flex"
            mt={4}
            gap={8}
            flexDirection={{ _: 'column', md: 'row' }}
            flexWrap="wrap"
          >
            {data.allContentfulProject.nodes.map(project => (
              <ProjectItem key={project.id} project={project} />
            ))}
          </x.div>
        </x.div>
      </Container>
    </x.section>
  )
}
