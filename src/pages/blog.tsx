import React, { FunctionComponent } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby'
import Layout from '../components/layout';
import Seo from '../components/seo';


type NodeType = {
    id: KeyType,
    frontmatter:{
      title: string,
      date: Date
    },
    excerpt: string
}

type DataType = {
    allMdx: {
        nodes: NodeType[]
    }
}

const BlogPage = ({data}:PageProps<DataType>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        excerpt
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="My Blog Posts" />

export default BlogPage