import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import { GatsbyImage, GatsbyImageProps, getImage, ImageDataLike } from 'gatsby-plugin-image'

type DataType = {
  mdx: {
      frontmatter:{
        title: string
        date: React.ReactNode
        hero_image: ImageDataLike 
        hero_image_alt: string
        hero_image_credit_link: string
        hero_image_credit_text: string
      } 
  }
}

const Project = ({ data, children }:PageProps<DataType>) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  const phrase = "\"Can\'t say I've ever been too fond of beginnings, myself. Messy little things. Give me a good ending anytime. You know where you are with an ending.\"- Neil Gaiman"
  return (
    <Layout pageTitle={"Projects"} quote={phrase}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }:PageProps<DataType>) => <Seo title={data.mdx.frontmatter.title} />

export default Project