import React, { useState } from 'react';
import {  navigate, useStaticQuery, graphql } from 'gatsby';
import ThreeLazy from '../components/three-lazy';
import { StaticImage } from 'gatsby-plugin-image';
import resume from '../documents/Arthur_Dreamworld_CV.pdf'
 


interface LayoutProps {
    pageTitle: string,
    quote: string,
    children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ pageTitle, quote, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [navSelected, setNavSelected] = useState(null);
  return (
    <main>
        <div className="ThreeJSAnimation">
          <ThreeLazy />
        </div>
        
        <div className="header">
            <h1> Dreamworld </h1>
            <h2> {pageTitle} </h2>
            <h3> {quote} </h3>
            <div className="Contact">
              <a href={resume} download="Arthur_Dreamworld_CV"><StaticImage alt="resume icon" src="../images/cv.png" className='icon'/></a>
              <a href="https://github.com/arthurgonze" target="_blank"><StaticImage alt="GitHub icon" src="../images/github.png" className='icon'/></a>
              <a href="https://www.linkedin.com/in/arthur-gonze-machado-890715177/" target="_blank"><StaticImage alt="Linkedin icon" src="../images/linkedin.png" className='icon'/></a>
              <a href='mailto:arthurgonze@gmail.com'><StaticImage alt="e-mail icon" src="../images/email.png" className='icon'/></a>
            </div>
        </div>

        <div className="page-content">
          {children}
        </div>

        <div className="navigation">
          <button onClick={() => {navigate("/")}}> Home </button>
          <button onClick={() => {navigate("/about")}}> About </button>
          <button onClick={() => {navigate("/projects")}}> Projects </button>
          <button onClick={() => {navigate("/blog")}}> Blog </button>
        </div>
      </main>
  );
};

export default Layout;