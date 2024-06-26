/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

const contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the access token need to be provided.'
  )
}

module.exports = {
  graphqlTypegen: true,
  siteMetadata: {
    title: `Luigi Sanchez Portfolio`,
    description: `Luigi Sanchez, Software Engineer based in Manchester, UK.`,
    author: `@luigiderson`,
    url: `https://portfolio-1f4.pages.dev`,
    image: {
      src: `/assets/luigi-derson-logo.png`,
      width: 336,
      height: 336,
    },
    keywords: ['Front End Developer', 'Software Engineer', 'React Developer'],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@src': 'src',
          '@components': 'src/components',
          '@atoms': 'src/components/atoms',
          '@molecules': 'src/components/molecules',
          '@organisms': 'src/components/organisms',
          '@themes': 'src/themes',
          '@pages': 'src/pages',
          '@templates': 'src/templates',
          '@content': 'src/content',
        },
        extensions: ['js', 'tsx', 'ts', 'jsx'],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
  ],
}
