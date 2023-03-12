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
  const phrase = "\"Can\'t say I've ever been too fond of beginnings, myself. Messy little things. Give me a good ending anytime. You know where you are with an ending.\"- Neil Gaiman"
  return (
    <Layout pageTitle="Projects" quote={phrase}>
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