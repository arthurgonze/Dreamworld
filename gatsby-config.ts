import type { GatsbyConfig } from "gatsby";
const path = require('path')


const config: GatsbyConfig = {
  siteMetadata: {
    title: `Dreamworld`,
    siteUrl: `https://www.yourdomain.tld`
  },
  
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp", 
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        start_url: `/`,
        background_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-mdx`,
    "gatsby-transformer-sharp",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": path.resolve(__dirname, 'src/components'),
          "@styles": path.resolve(__dirname, 'src/styles'),
          "@images": path.resolve(__dirname, 'src/images'),
          "@static": path.resolve(__dirname, 'src/static')
        },
      }
    }
  ],
  pathPrefix: "/Dreamworld"
};

export default config;
