/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      //name of package
      resolve: 'gatsby-source-filesystem',
      //info gatsby fileSystem needs to find graphql content
      options: {
        name:'pages',
        //dir name = wherever web page is hosted
        path:'${__dirname}/src/pages'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name:'posts',
        path:'${__dirname}/src/posts'
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name:'images',
        path:'${__dirname}/src/images'
      },
    },
    //gatsby plugins
    //https://www.gatsbyjs.org/plugins/       search plugins on left side
    //--------------------
    //sharp = image manipulation library
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    //mdx = mdx markdown integration
    {
      resolve:`gatsby-plugin-mdx`,
      options: {
        extension: [`.md`, `.mdx`],
        //optimizes images with sharp
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
  ],
}
