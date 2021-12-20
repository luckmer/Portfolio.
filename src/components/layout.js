import React, { useContext } from "react";

//css
import GlobalStyle from "../styles/GlobalStyle.styled";
import styled, { ThemeProvider } from "styled-components";

//helmet
import { Helmet } from "react-helmet";

//components
import Hamburger from "./hamburger/Hamburger";
import CirclePanel from "../cursor/CirclePanel";
import Nav from "./nav/Nav";

//store
import { AppContext } from "../store/store";

//hook
import UseWindowScrollHook from "../hooks/useWindowScroll";

//theme

const darkTheme = {
  background: "#646461",
  color: "#fff",
  dot: "pink",
  change: "#646461",
  layoutBackground: "#646461",
  darkThemeBackground: "#0f0f0f",
  darkThemeColor: "#f3efee"
};

const lightTheme = {
  background: "#f9f5f1",
  color: "black",
  dot: "red",
  change: "#191917",
  layoutBackground: "#1e1e1e",
  darkThemeBackground: "#f9f5f1",
  darkThemeColor: "black"
};

// markup
const Layout = ({ children }) => {
  const { state } = useContext(AppContext);
  const { scrollTop } = UseWindowScrollHook();
  const darkStatus = state.switchTheme;

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
      <CirclePanel scrollTop={scrollTop} darkTheme={darkStatus} />
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
