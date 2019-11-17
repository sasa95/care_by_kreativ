module.exports = {
  siteMetadata: {
    title: `Care by Kreativ`,
    description: 'This is our digital agency.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-lodash`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
      },
    },
  ],
}
