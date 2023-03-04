import React, { FunctionComponent, useState } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import CanvasAnimation from '../components/ThreeAnimation';
import AboutMe from '../components/AboutMe';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import ThreeLazy from '../components/three-lazy';
 

const IndexPage: FunctionComponent<PageProps> = () => {

  const [navSelected, setNavSelected] = useState(null);
    return (
      <main>
        {/* <CanvasAnimation/> */}
        <div className="bg-brand-background absolute top-0 left-0 w-full h-full z-0">
          <ThreeLazy />
        </div>
        
        <div className="header">
            <h1>Dreamworld</h1>
            <h3>"Would you kindly" explore this site?</h3>
        </div>

        <div className="navigation">
          <button onClick={() => setNavSelected(AboutMe)}>About</button>
          <button onClick={() => setNavSelected(Blog)}>Blog</button>
          <button onClick={() => setNavSelected(Contact)}>Contact</button>
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
  