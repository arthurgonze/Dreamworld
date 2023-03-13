import React, { FunctionComponent } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby'
import Layout from '../../components/layout';
import Seo from '../../components/seo';
import Card from '../../components/card';
import { ImageDataLike } from 'gatsby-plugin-image';
// import type {DataType, NodeType} from '../blog/index';

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

const ProjectsPage = ({data}:PageProps<DataType>) => {
  const phrase = "\"Can\'t say I've ever been too fond of beginnings, myself. Messy little things. Give me a good ending anytime. You know where you are with an ending.\"- Neil Gaiman"
  return (
    <Layout pageTitle="Projects" quote={phrase}>
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
      filter: {frontmatter: {folder: {eq: "projects"}}}
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

export const Head: HeadFC = () => <Seo title="My Projects" />

export default ProjectsPage