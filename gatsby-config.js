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
  /* Your site config here */
  siteMetadata: {
    title: `Luigi Derson Portfolio`,
    description: `Luigi Derson, Front End Developer and UI/UX Designer based in Manchester, UK.`,
    author: `@luigiderson`,
    url: `https://www.luigiderson.com`,
    image: {
      src: `/images/luigi-portrait.jpg`,
      width: 500,
      height: 500,
    },
    keywords: [
      'Front End Developer',
      'UX Developer',
      'UI Designer',
      'React Developer',
      'Vue Developer',
    ],
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
          '@pages': 'src/pages',
          '@templates': 'src/templates',
          '@content': 'src/content',
        },
        extensions: ['js', 'tsx', 'ts', 'jsx'],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-contentful`,
      options: contentfulConfig,
    },
  ],
}
