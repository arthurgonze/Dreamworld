// Step 1: Import React
import React, { FunctionComponent } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout'
import Seo from '../components/seo';
 
const AboutPage: FunctionComponent<PageProps> = () => {
  return (
    <Layout pageTitle="About Me">
        <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
  );
};
 
export const Head: HeadFC = () => <Seo title="About Me"/>

// Step 3: Export your component
export default AboutPage;
 
