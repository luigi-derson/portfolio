import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SEOProps {
  description?: string
  lang?: string
  meta?: Array<{ name: string; content: string }>
  title?: string
  pathname?: string
  image?: { src: string; width: number; height: number }
}

const SEO = ({
  description = '',
  lang = 'en',
  meta = [],
  image: metaImage,
  title,
  pathname,
}: SEOProps) => {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          keywords
          siteUrl: url
          defaultImage: image {
            src
            width
            height
          }
        }
      }
    }
  `)

  const metaDescription = description || site.siteMetadata.description
  const image = metaImage || site.siteMetadata.defaultImage

  const imageUrl = `${site.siteMetadata.siteUrl}${image.src}`

  const canonical = pathname ? `${site.siteMetadata.siteUrl}${pathname}` : null

  return (
    <Helmet
      htmlAttributes={{
        lang,
        dir: 'ltr',
      }}
      defaultTitle={title || site.siteMetadata.title}
      titleTemplate={`%s · ${site.siteMetadata.title}`}
      link={canonical ? [{ rel: 'canonical', href: canonical }] : []}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: site.siteMetadata.keywords.join(','),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: imageUrl,
        },
        {
          property: 'og:image:width',
          content: image.width,
        },
        {
          property: 'og:image:height',
          content: image.height,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
      ].concat(meta)}
    />
  )
}

export default SEO
