import HomeHero from '@components/molecules/HomeHero'
import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const HomePage = () => {
  return (
    <React.Fragment>
      <HomeHero />
      <StaticImage
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          top: 0,
          left: 0,
          opacity: 0.5,
          zIndex: -1,
        }}
        src="../../images/mesh-gradient.png"
        alt="Mesh Gradient"
        layout="fullWidth"
        formats={['auto', 'webp', 'avif']}
      />
    </React.Fragment>
  )
}

export default HomePage
