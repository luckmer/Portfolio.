import React, { useContext } from "react";

//css
import GlobalStyle from "../styles/GlobalStyle.styled";
import styled, { ThemeProvider } from "styled-components";
import { Helmet } from "react-helmet";
//components
import Hamburger from "./hamburger/Hamburger";
import Nav from "./nav/Nav";

//store
import { AppContext } from "../store/store";

//theme

const darkTheme = {
  background: "#646461",
  color: "#fff",
  dot: "blue",
  change: "#646461",
  layoutBackground: "#646461",
  darkThemeBackground: "#0f0f0f",
  darkThemeColor: "#f3efee"
};

const lightTheme = {
  background: "#0f0f0f",
  color: "#fff",
  dot: "red",
  change: "#191917",
  layoutBackground: "#1e1e1e",
  darkThemeBackground: "#646461",
  darkThemeColor: "#FFF"
};

// markup
const Layout = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <ThemeProvider theme={state.switchTheme === false ? lightTheme : darkTheme}>
      <Helmet>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
        </style>
      </Helmet>
      <GlobalStyle />
      <Hamburger />
      <Nav />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default Layout;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
