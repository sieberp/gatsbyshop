/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'Wien Kaffee',
    author: {
      name: 'Paul Sieber',
      email: 'paul@sieber.dev',
    },
    description: 'A small shop template with Contentful, Snipcart and Gatsby',
    siteUrl: 'https://gatsbyshopcoffee.netlify.app',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-snipcartv3`,
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
        autopop: false,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ]
}
