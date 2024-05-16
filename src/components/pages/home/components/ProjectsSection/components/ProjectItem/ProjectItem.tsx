import { Fragment } from 'react'
import { IGatsbyImageData, getImage } from 'gatsby-plugin-image'
import { useSpace, x } from '@xstyled/styled-components'
import { LinkExternalIcon } from '@primer/styled-octicons'

import { ProjectItemProps } from './ProjectItem.types'
import { Link } from '@components/atoms/Link'
import { Image } from '@components/atoms/Image'
import { Heading } from '@components/atoms/Heading'

export const ProjectItem = (props: ProjectItemProps) => {
  const { project } = props
  let image: IGatsbyImageData | undefined
  const alt = project.images?.[0]?.title ?? project.title
  const firstImage = project.images?.[0]
  const gap = useSpace(8)
  if (firstImage) {
    // @ts-ignore
    image = getImage(firstImage)
  }
  const Wrapper = firstImage?.url ? Link : Fragment
  return (
    <x.div key={project.id} flex={`0 0 calc(50% - ${gap})`}>
      {image && (
        <Wrapper
          {...(firstImage?.url && {
            href: firstImage?.url,
            target: '_blank',
            rel: 'noopener noreferrer',
            display: 'block',
          })}
        >
          <Image
            image={image}
            alt={alt ?? ''}
            border="thin"
            borderColor="borders"
            objectPosition="left"
            boxShadow="default"
            style={{
              aspectRatio: '1/1',
            }}
          />
        </Wrapper>
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
          <Link
            href={project.link}
            target="_blank"
            rel="noreferrer norel"
            fontWeight={500}
            display="inline-block"
            mt={4}
            fontSize="lg"
          >
            {project.link.split('//')[1]}
            <LinkExternalIcon ml={2} />
          </Link>
        )}
      </x.div>
    </x.div>
  )
}
