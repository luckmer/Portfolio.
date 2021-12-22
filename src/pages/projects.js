import React from "react";

//components
import Layout from "../components/layout";

//cursor
import Cursor from "../cursor/Cursor";

//store
import { AppProvider } from "../store/store";

const projects = () => {
  return (
    <AppProvider>
      <Layout>
        <Cursor />
      </Layout>
    </AppProvider>
  );
};

export default projects;
