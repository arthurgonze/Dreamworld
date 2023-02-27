import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'

type DataType = {
  mdx: {
      frontmatter:{
        title: string
        date: React.ReactNode
      } 
  }
}

const BlogPost = ({ data, children }:PageProps<DataType>) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
    }
  }
`

export const Head = ({ data }:PageProps<DataType>) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost