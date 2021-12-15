import React, { useContext } from "react";

//css
import GlobalStyle from "../styles/GlobalStyle.styled";
import styled, { ThemeProvider } from "styled-components";

//components
import Nav from "./nav/Nav";

//store
import { AppContext } from "../store/store";

//theme

const darkTheme = {
  background: "#41443E",
  color: "#fff",
  dot: "#959C8E"
};

const lightTheme = {
  background: "#E2DACF",
  color: "#333",
  dot: "#959C8E"
};

// markup
const Layout = ({ children }) => {
  const { state } = useContext(AppContext);

  return (
    <ThemeProvider theme={state.switchTheme === false ? lightTheme : darkTheme}>
      <GlobalStyle />
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
