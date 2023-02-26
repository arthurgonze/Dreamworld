// Step 1: Import React
import React, { FunctionComponent } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
 
// Step 2: Define your component
const IndexPage: FunctionComponent<PageProps> = () => {
  return (
    <Layout pageTitle="Dreamworld">
      <p>I'm making this by following the Gatsby Tutorial hehe.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
        src="../images/vagabond.jpg"
      />
    </Layout>
  );
};
 
// You'll learn about this in the next task, just copy it for now
export const Head: HeadFC = () => {
  return <title>Home Page</title>;
};

// Step 3: Export your component
export default IndexPage;