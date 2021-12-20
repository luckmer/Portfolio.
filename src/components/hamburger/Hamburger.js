import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";

//store
import { AppContext } from "../../store/store";

//styles
import {
  Nav,
  AnimatedDivs,
  NavDivs,
  Content,
  Ul,
  Li,
  SpanFlex,
  HideArrow,
  Span,
  Footer,
  FooterSpan,
  A,
  CounterSpan,
  DivCounterSpacer
} from "../styles/hamburger.styles";

const Hamburger = () => {
  const { state, dispatch, functions } = useContext(AppContext);
  const [rotate, setRotate] = useState({ text: "", number: "" });
  const [pathLocation, setPathLocation] = useState("");
  const { handleHoverCursor, handleOutMouse } = functions;

  const hamburgerStatus = state.switchHamburgerStatus;

  useEffect(() => {
    if (hamburgerStatus) {
      document.body.style.overflow = "hidden";
    } else document.body.style.overflow = "unset";
  }, [hamburgerStatus]);

  const pages = [
    { name: "home", number: "1" },
    { name: "github", number: "2", link: "https://github.com/luckmer" },
    { name: "projects", number: "3" }
  ];

  const handleMouseOver = (text, number) => {
    setRotate({ text, number });
    dispatch({ type: "CURSOR_OVER", payload: true });
  };

  const handleMouseOut = () => {
    setRotate({ text: "", number: "" });
    dispatch({ type: "CURSOR_OVER", payload: false });
  };

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

  return hamburgerStatus ? (
    <Nav>
      <AnimatedDivs>
        <NavDivs></NavDivs>
        <NavDivs></NavDivs>
        <NavDivs></NavDivs>
        <NavDivs></NavDivs>
      </AnimatedDivs>
      <Content>
        <Ul>
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
                >
                  <HideArrow className={name(text)}>&rArr;</HideArrow>
                  {[...text].map((el, i) =>
                    link ? (
                      <FlexDiv key={i}>
                        <Span className={rotate.text === text ? "rotate" : ""}>
                          <a href="https://github.com/luckmer">{el}</a>
                        </Span>
                      </FlexDiv>
                    ) : (
                      <FlexDiv key={i}>
                        <Span
                          className={rotate.text === text ? "rotate" : "out"}
                        >
                          {el}
                        </Span>
                      </FlexDiv>
                    )
                  )}
                </SpanFlex>
                <DivCounterSpacer>
                  <CounterSpan>0</CounterSpan>
                  <CounterSpan className={name(text)}>{number}</CounterSpan>
                </DivCounterSpacer>
              </Li>
            );
          })}
        </Ul>
      </Content>
      <Footer>
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
          <A href="https://github.com/luckmer">GITHUB</A>
        </div>
        <div></div>
      </Footer>
    </Nav>
  ) : (
    ""
  );
};

export default Hamburger;

const FlexDiv = styled.div`
  display: inline-flex;
`;
