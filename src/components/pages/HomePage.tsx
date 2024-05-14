import React, { useEffect } from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useColorMode } from '@xstyled/styled-components'
import HomeHero from '@components/molecules/HomeHero'
import { Projects } from '@components/molecules/Projects'

const HomePage = () => {
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
    <React.Fragment>
      <HomeHero />
      <Projects />
      <StaticImage
        className="mesh-gradient-image"
        src="../../images/mesh-gradient.png"
        alt="Mesh Gradient"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
      />
    </React.Fragment>
  )
}

export default HomePage
