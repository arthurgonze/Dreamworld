// Step 1: Import React
import React, { FunctionComponent } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout'
 
// Step 2: Define your component
const IndexPage: FunctionComponent<PageProps> = () => {
  return (
    <Layout pageTitle="Hello world! 1">
      <p>I'm making this by following the Gatsby Tutorial hehe.</p>
    </Layout>
  );
};
 
// You'll learn about this in the next task, just copy it for now
export const Head: HeadFC = () => {
  return <title>Home Page</title>;
};

// Step 3: Export your component
export default IndexPage;