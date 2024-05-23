import React, { useState } from 'react';
import {  navigate, useStaticQuery, graphql} from 'gatsby';
import { useLocation } from '@reach/router';
// import { useLocation } from 'react-router-dom';
// import { useLocation } from '@gatsbyjs/reach-router';
import ThreeLazy from '../components/three-lazy';
import { StaticImage } from 'gatsby-plugin-image';
 


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
  const location = useLocation();
  
  // Define the paths where the page-content should be displayed
  const displayPaths = ['/projects/', '/about/', '/contact/'];
  // console.log('path: %s', location.pathname);
  // console.log('includes path? ', displayPaths.includes(location.pathname));
  return (
    <main className='main-section'>
        <div className="container">
          <header className='portfolio-header'>
            <div className='header-content'>
              <div className='header-texts'>
                <button className="title-button" onClick={ ()=> {navigate("/")}}>
                      <h1 className='header-title'>Arthur Gonze Machado </h1>
                </button>
                <h3 className='header-quote'> {quote} </h3>
              </div>
              <nav className='nav-buttons'>
                <button className="button" onClick={() => 
                  {navigate("/projects")}}>Projects</button>
                <button className="button" onClick={() => 
                  {navigate("/about")}}>About</button>
                <button className="button" onClick={() => 
                  {navigate("/contact")}}>Contact</button>
              </nav>
            </div>
          </header>
        </div>
        <div className='three-anim'>
          <ThreeLazy/>
        </div>
        {/* <div className="page-content"> 
          {children} 
        </div> */}
        {displayPaths.includes(location.pathname) && (
          <div className="page-content"> {children} </div>
        )}
      </main>
  );
};

export default Layout;