import React, { FunctionComponent } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout';
import Seo from '../../components/seo';


type NodeType = {
    id: KeyType,
    frontmatter:{
      title: string,
      date: Date,
      slug: string
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
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
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
          slug
        }
        id
      }
    }
  }
`

export const Head: HeadFC = () => <Seo title="My Blog Posts" />

export default BlogPage