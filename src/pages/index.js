import React from "react";

//components
import Layout from "../components/layout";

//store
import { AppProvider } from "../store/store";

//components
import Banner from "../components/banner/Banner";
import Content from "../components/content/Content";
import Contact from "../components/Contact/Contact";

// markup
const IndexPage = () => {
  return (
    <AppProvider>
      <Layout>
        <Banner />
        <Content />
        <Contact />
      </Layout>
    </AppProvider>
  );
};

export default IndexPage;
