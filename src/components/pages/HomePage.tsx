import HomeHero from '@components/molecules/HomeHero'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { useColorMode } from '@xstyled/styled-components'

const HomePage = () => {
  const [colorMode] = useColorMode()

  return (
    <React.Fragment>
      <HomeHero />
      <StaticImage
        className={`mesh-gradient-image mesh-gradient-image--${colorMode}`}
        src="../../images/mesh-gradient.png"
        alt="Mesh Gradient"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
      />
    </React.Fragment>
  )
}

export default HomePage
