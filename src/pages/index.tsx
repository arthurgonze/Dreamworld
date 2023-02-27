// Step 1: Import React
import React, { FunctionComponent } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
 
// Step 2: Define your component
const IndexPage: FunctionComponent<PageProps> = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial hehe.</p>
      <StaticImage
        alt="Takezo training by the sea shore"
        src="../images/vagabond.jpg"
      />
    </Layout>
  );
};
 
// You'll learn about this in the next task, just copy it for now
export const Head: HeadFC = () => <Seo title="Home Page"/>

// Step 3: Export your component
export default IndexPage;