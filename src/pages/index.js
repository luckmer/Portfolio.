import React from "react";

//components
import Layout from "../components/layout";

//store
import { AppProvider } from "../store/store";

//components
import Banner from "../components/banner/Banner";

// markup
const IndexPage = () => {
  return (
    <AppProvider>
      <Layout>
        <Banner />
      </Layout>
    </AppProvider>
  );
};

export default IndexPage;
