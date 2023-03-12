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
            <p>
                Hello there! It's-a me, Arthur.
            </p>
            
            <p>
                I am currently finishing my Computer Science Master's degree at a Federal University here in Brazil. 
                My main research area is Computer Graphics, but my research subject is Computational Fluid Dynamics.  
                I'm currently looking for a computer graphics developer job in the game or animation industry.
            </p>
            
            <p>
                In my academic career, I have worked on multiple game development and computer graphics-related projects in collaboration with different departments and institutions. 
                One of my main accomplishments was being selected as a research apprenticeship scholarship at the 
                National Laboratory for Scientific Computing <a href="https://www.gov.br/lncc/pt-br" target="_blank"> (LNCC) </a> 
                in collaboration with my University <a href="https://www2.ufjf.br/ufjf/" target="_blank"> (UFJF) </a> 
                and funded by the National Council for Scientific and Technological Development <a href="https://www.gov.br/cnpq/pt-br" target="_blank"> (CNPq)</a>. 
                On working on those projects I’ve always been part of a diverse background team of students and doctorate researchers. 
                During this time I’ve developed proficiencies in the complexities of scientific research, code designing, and programming while also enhancing a solid math background. 
                Along with that, I've learned and implemented new technologies such as machine learning algorithms, and virtual and augmented reality for web and mobile systems.
            </p>

            <p>
                Beyond my academic background, I’ve worked as an indie game developer. 
                During this journey, I've completed all projects well within project times and ensured quality standards were consistently met.  
                One of my main accomplishments as an indie game dev was publishing a game on the Nintendo Switch platform. 
                I have always been involved in various gaming systems that went beyond programming. 
                I’ve taken part in designing gameplay features, mechanics, UI, scenario construction, and sound using Unreal or Unity game engines. 
                Also, I've developed tools to help the designers and artists bring life and fun to the game.
            </p>
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