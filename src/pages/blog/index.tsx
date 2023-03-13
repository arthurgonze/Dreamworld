import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import Card from '../../components/card';
import { ImageDataLike } from 'gatsby-plugin-image';

type NodeType = {
    id: KeyType,
    excerpt: string,
    frontmatter:{
      title: string,
      date: Date,
      slug: string,
      folder: string,
      thumbnail_image: ImageDataLike,
      thumbnail_alt: string
    }
}

type DataType = {
    allMdx: {
        nodes: NodeType[]
    }
}

const BlogPage = ({data}:PageProps<DataType>) => {
  const phrase = "\"It\'s Dangerous To Go Alone! Take This\"";
  return (
    <Layout pageTitle="Blog" quote={phrase}>
      {
        data.allMdx.nodes.map((node) => (
          <Card card_node={node}/>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(
      sort: {frontmatter: {date: DESC}}
      filter: {frontmatter: {folder: {eq: "blog"}}}
    ) {
      nodes {
        id
        frontmatter {
          title
          date
          slug
          folder
        }
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="My Blog Posts" />

export default BlogPage