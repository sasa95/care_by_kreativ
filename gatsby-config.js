module.exports = {
  siteMetadata: {
    title: `Care by Kreativ`,
    description: 'This is our digital agency.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Muli`,
            variants: [`300`, `400`, `700`, `900`],
          },
        ],
      },
    },
  ],
}
