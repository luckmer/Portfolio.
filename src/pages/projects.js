import React from "react";
import Layout from "../components/layout";
import Cursor from "../cursor/Cursor";
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
