import React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout';
import Seo from '../components/seo';


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

const AboutMe = ({data}:PageProps<DataType>) => {
  const phrase = "\"I Used To Be An Adventurer Like You. Then I Took An Arrow To The Knee.\"";
  return (
    <Layout pageTitle="About Me" quote={phrase}>
      {
        <div className="scroll">
            <h2 className='h2-first-line'> Hello there! It’s-a me, Arthur. </h2>

            <p> Academic wise, I hold a Master’s degree in Computer Science with a specialization in Computer Graphics 
              and my main research topic is Computational Fluid Dynamics. Currently, I'm working at DNEG. I serve as a generalist on the Realtime 
              technologies team, focusing on creating both linear and realtime content with Unreal 
              Engine, with a particular inclination towards tech-art tasks. </p>

            <p> My academic career has been marked by involvement in diverse game development and 
              computer graphics projects, leading to a research apprenticeship scholarship at the 
              National Laboratory for Scientific Computing (pt-br: LNCC), in partnership with the Federal 
              University of Juiz de Fora (pt-br: UFJF) and supported by the National Council for Scientific 
              and Technological Development (pt-br: CNPq). </p>

            <p> As a generalist in the gaming industry, I’ve always embraced a wide range of 
              responsibilities within the game engine. During my time as an indie game developer, 
              I handled all the necessary tasks within the engine, while my colleagues focused on 
              game design, art creation, and narrative development—everything that brings a game to 
              life outside the engine. </p>
        </div>
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

export default AboutMe