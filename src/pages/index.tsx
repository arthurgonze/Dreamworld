import React, { FunctionComponent, useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import CanvasAnimation from '../components/ThreeAnimation';
import AboutMe from '../components/AboutMe';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import ThreeLazy from '../components/three-lazy';
import { StaticImage } from 'gatsby-plugin-image';
import resume from '../documents/Arthur_Dreamworld_CV.pdf'
 

const IndexPage: FunctionComponent<PageProps> = () => {

  const [navSelected, setNavSelected] = useState(null);
    return (
      <main>
        {/* <CanvasAnimation/> */}
        <div className="ThreeJSAnimation">
          <ThreeLazy />
        </div>
        
        <div className="header">
            <h1> Dreamworld </h1>
            <h3> "Would you kindly" explore this site? </h3>
            <div className="Contact">
              <a href={resume} download="Arthur_Dreamworld_CV"><StaticImage alt="resume icon" src="../images/cv.png" className='icon'/></a>
              <a href="https://github.com/arthurgonze" target="_blank"><StaticImage alt="GitHub icon" src="../images/github.png" className='icon'/></a>
              <a href="https://www.linkedin.com/in/arthur-gonze-machado-890715177/" target="_blank"><StaticImage alt="Linkedin icon" src="../images/linkedin.png" className='icon'/></a>
              <a href='mailto:arthurgonze@gmail.com'><StaticImage alt="e-mail icon" src="../images/email.png" className='icon'/></a>
            </div>
        </div>

        <div className="navigation">
          <button onClick={() => setNavSelected(AboutMe)}> About </button>
          <button onClick={() => setNavSelected(Blog)}> Blog </button>
          {/* <button onClick={() => setNavSelected(Contact)}> Contact </button> */}
          <button> Projects </button>
        </div>

        <div className={`content-holder ${navSelected ? "show-content" : ""}`}>
          <div className='content-main'>
            <button className='close-btn' onClick={() => setNavSelected(null)}>CLOSE</button>
            {navSelected}
          </div>
        </div>

        
      </main>
    );
  };
   
  export const Head = () => <title>Gatsby - Portfolio page with Three.js</title>
  export default IndexPage;
  