module.exports = {
  siteMetadata: {
    title: `Care by Kreativ`,
    description: 'This is our digital agency.',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-lodash`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `./src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        fileName: false,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          '@components': 'src/components',
          '@context': 'src/context',
          '@data': 'src/data',
          '@helpers': 'src/helpers',
          '@images': 'src/images',
          '@pages': 'src/pages',
          '@styles': 'src/styles',
          '@templates': 'src/templates',
        },
        extensions: ['js'],
      },
    },
  ],
}
