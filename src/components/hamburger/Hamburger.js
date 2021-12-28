import React, { useCallback, useContext, useEffect, useState } from "react";

//store
import { AppContext } from "../../store/store";

//icons
import { BsGithub } from "react-icons/bs";

//styles
import styled from "styled-components";
import {
  DivCounterSpacer,
  AnimatedDivs,
  CounterSpan,
  FooterSpan,
  HideArrow,
  SpanFlex,
  Content,
  NavDivs,
  Footer,
  Span,
  Nav,
  Ul,
  Li,
  A
} from "../styles/hamburger.styles";

//animations
import { motion } from "framer-motion";
import {
  projectVariants,
  numberVariant,
  footerVariant,
  arrowVariant,
  navVariant,
  variants
} from "../../animations/variants";

const Hamburger = () => {
  const [rotate, setRotate] = useState({ text: "", number: "" });
  const [animationStatus, setAnimationStatus] = useState(false);
  const [pathLocation, setPathLocation] = useState("");
  const [textStatus, setTextStatus] = useState("");

  const { state, dispatch, functions } = useContext(AppContext);

  const { handleHoverCursor, handleOutMouse } = functions;

  const hamburgerStatus = state.switchHamburgerStatus;

  const pages = [
    { name: "home", number: "1" },
    { name: "github", number: "2", link: "https://github.com/luckmer" },
    { name: "projects", number: "3" }
  ];

  const handleMouseOver = useCallback(
    (text, number) => {
      setRotate({ text, number });
      dispatch({ type: "CURSOR_OVER", payload: true });
    },
    [dispatch]
  );

  const handleMouseOut = useCallback(() => {
    setRotate({ text: "", number: "" });
    dispatch({ type: "CURSOR_OVER", payload: false });
  }, [dispatch]);

  useEffect(() => {
    const locations = [
      { name: "home", path: "/" },
      { name: "projects", path: "/projects" }
    ];
    const path = window.location.pathname;
    const currentPath = locations.find((el) => el.path === path.toString());

    setPathLocation(currentPath.name);
  }, []);

  const name = (text) =>
    (pathLocation === text && !rotate.text) || rotate.text === text
      ? "rotate"
      : "out";

  const handleAnimationEnd = React.useCallback(() => {
    setAnimationStatus(true);
  }, []);

  const handleAnimationStart = React.useCallback(() => {
    setAnimationStatus(false);
  }, []);

  const handleTextStart = React.useCallback((status) => {
    setTextStatus(status);
  }, []);

  const handleCloseHamburger = useCallback(
    (name) => {
      if (name.toLowerCase() === "home") {
        window.scrollTo({ top: 0 });
        document.body.style.overflow = "unset";
      }

      if (name.toLowerCase() === "projects") {
        dispatch({ type: "SCROLL_ON", payload: true });
      }

      dispatch({ type: "HAMBURGER_STATUS", payload: false });
    },
    [dispatch]
  );

  return (
    <Nav
      animate={
        hamburgerStatus ? "visible" : textStatus !== "" ? textStatus : "hidden"
      }
      variants={navVariant}
    >
      <AnimatedDivs
        initial={false}
        animate={
          hamburgerStatus
            ? "visible"
            : textStatus !== ""
            ? textStatus
            : "hidden"
        }
        onAnimationStart={() => handleAnimationStart()}
      >
        <NavDivs custom={0.02} variants={variants}></NavDivs>
        <NavDivs custom={0.08} variants={variants}></NavDivs>
        <NavDivs custom={0.16} variants={variants}></NavDivs>

        <NavDivs
          custom={0.24}
          variants={variants}
          onAnimationComplete={() => handleAnimationEnd()}
        ></NavDivs>
      </AnimatedDivs>
      <Content>
        <Ul
          initial={false}
          animate={
            hamburgerStatus
              ? animationStatus
                ? "visible"
                : "hidden"
              : "hidden"
          }
          onAnimationStart={() => handleTextStart("visible")}
          onAnimationComplete={() => handleTextStart("hidden")}
        >
          {pages.map((el, i) => {
            const text = el.name;
            const number = el.number;
            const link = el.link;
            return (
              <Li key={i}>
                <SpanFlex
                  className={rotate.text === text ? "rotate" : ""}
                  onMouseEnter={() => handleMouseOver(text, number)}
                  onMouseLeave={handleMouseOut}
                  onClick={() => handleCloseHamburger(text)}
                >
                  <HideArrow className={name(text)} variants={arrowVariant}>
                    <HideArrow className={name(text)}>&rArr;</HideArrow>
                  </HideArrow>
                  {[...text].map((el, i) =>
                    link ? (
                      <FlexDiv
                        key={i}
                        custom={Math.abs(i / 20)}
                        variants={projectVariants}
                      >
                        <Span className={rotate.text === text ? "rotate" : ""}>
                          <a href="https://github.com/luckmer">{el}</a>
                        </Span>
                      </FlexDiv>
                    ) : (
                      <FlexDiv
                        key={i}
                        custom={Math.abs(i / 20)}
                        variants={projectVariants}
                      >
                        <Span
                          className={rotate.text === text ? "rotate" : "out"}
                        >
                          {el}
                        </Span>
                      </FlexDiv>
                    )
                  )}
                </SpanFlex>
                <TestDiv>
                  <DivCounterSpacer variants={numberVariant}>
                    <CounterSpan>0</CounterSpan>
                    <CounterSpan className={name(text)}>{number}</CounterSpan>
                  </DivCounterSpacer>
                </TestDiv>
              </Li>
            );
          })}
        </Ul>
      </Content>
      <Footer
        animate={
          hamburgerStatus ? (animationStatus ? "visible" : "hidden") : "hidden"
        }
        variants={footerVariant}
      >
        <div>
          <FooterSpan>2021</FooterSpan>
        </div>
        <div
          onMouseEnter={handleHoverCursor}
          onMouseOut={handleOutMouse}
          tabIndex={0}
          role="button"
          onBlur={() => void 0}
          onFocus={() => void 0}
        >
          <A href="https://github.com/luckmer">
            <BsGithub />
          </A>
        </div>
        <div></div>
      </Footer>
    </Nav>
  );
};

export default React.memo(Hamburger);

const FlexDiv = styled(motion.div)`
  display: inline-flex;
  position: relative;
`;

const TestDiv = styled(motion.div)`
  position: absolute;
  right: 3vmin;
  bottom: 3vmin;
  overflow-y: hidden;
  transition: all 500ms ease;
`;
