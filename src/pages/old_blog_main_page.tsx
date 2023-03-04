import React, { FunctionComponent} from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import Seo from '../components/seo';
 
const OldBlogMainPage: FunctionComponent<PageProps> = () => {
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

export const Head: HeadFC = () => <Seo title="Home Page"/>

export default OldBlogMainPage;
