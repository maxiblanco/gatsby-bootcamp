/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require('path')

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Portfolio Gatsby Site',
    author: 'Maximiliano Blanco',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        pages: path.join(__dirname, 'src/pages'),
        components: path.join(__dirname, 'src/components')
      }
    },
    {
      resolve: 'gatsby-plugin-sass'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `scr`,
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark'
  ]
}
