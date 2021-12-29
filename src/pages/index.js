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
import Projects from "../components/projects/Projects";

// markup
const IndexPage = () => {
  return (
    <AppProvider>
      <Layout>
        <Cursor />
        <Banner />
        <Content />
        <Projects />
        <Contact />
      </Layout>
    </AppProvider>
  );
};

export default IndexPage;
