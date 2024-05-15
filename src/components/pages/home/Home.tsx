import { useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useColorMode } from '@xstyled/styled-components'

import { HeroSection, ProjectsSection } from './components'

export const Home = () => {
  const [colorMode] = useColorMode()

  useEffect(() => {
    const image = document.querySelector('.mesh-gradient-image')
    if (colorMode === 'dark' && image) {
      image.classList.add('mesh-gradient-image--dark')
    } else {
      image?.classList.remove('mesh-gradient-image--dark')
    }
  }, [colorMode])

  return (
    <>
      <HeroSection />
      <ProjectsSection />
      <StaticImage
        className="mesh-gradient-image"
        src="./assets/mesh-gradient.png"
        alt="Mesh Gradient"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
      />
    </>
  )
}
