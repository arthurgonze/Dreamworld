import React, { FunctionComponent} from 'react';
import { HeadFC, PageProps} from 'gatsby';
import Seo from '../components/seo';
import Layout from '../components/layout';
 

const IndexPage: FunctionComponent<PageProps> = () => {
    return (
      <Layout pageTitle="Home" quote='"Would you kindly" explore this site?'>
      </Layout>
    );
  };

  export const Head: HeadFC = () => <Seo title="Dreamworld" />
  export default IndexPage;
  