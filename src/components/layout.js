import React, { useContext, useRef, useEffect } from "react";

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

//framer-motion
import { AnimatePresence } from "framer-motion";

//animations
import CounterBanner from "../animations/counterBanner";

//theme

const darkTheme = {
  background: "#646461",
  color: "#f3efee",
  dot: "#ef3f24",
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
  const progress = useRef(null);

  useEffect(() => {
    const scrollBar = progress.current;

    let scrollTop =
      document.documentElement["scrollTop"] || document.body["scrollTop"];

    let scrollBottom =
      (document.documentElement["scrollHeight"] ||
        document.body["scrollHeight"]) - document.documentElement.clientHeight;

    let scrollPercent = (scrollTop / scrollBottom) * 100;

    scrollBar.style.width = `${scrollPercent}%`;
  }, [scrollTop]);

  useEffect(
    () => (window.onbeforeunload = () => window.scrollTo({ top: 0 })),
    []
  );

  return (
    <ThemeProvider theme={state.switchTheme === false ? lightTheme : darkTheme}>
      <ScrollBar ref={progress} />
      <CounterBanner />
      <CirclePanel scrollTop={scrollTop} darkTheme={darkStatus} />
      <Hamburger />
      <Helmet>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap');
        </style>
      </Helmet>
      <GlobalStyle />
      <Nav />
      <Main>{children}</Main>
    </ThemeProvider>
  );
};

export default React.memo(Layout);

const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const ScrollBar = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  width: 0;
  height: 0.5vmin;
  background: #ef3f24;
  z-index: 999999;
`;
