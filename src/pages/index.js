import React from "react";

//components
import Layout from "../components/layout";

//store
import { AppProvider } from "../store/store";

//components
import Banner from "../components/banner/Banner";
import Content from "../components/content/Content";
import Contact from "../components/Contact/Contact";

//cursor
import Cursor from "../cursor/Cursor";

// markup
const IndexPage = () => {
  return (
    <AppProvider>
      <Layout>
        <Cursor />
        <Banner />
        <Contact />
        <Content />
      </Layout>
    </AppProvider>
  );
};

export default IndexPage;
