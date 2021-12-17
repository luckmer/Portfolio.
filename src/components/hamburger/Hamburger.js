import React, { useContext, useEffect, useState } from "react";

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
  A
} from "../styles/hamburger.styles";

const Hamburger = () => {
  const { state, dispatch, functions } = useContext(AppContext);
  const [rotate, setRotate] = useState({ text: "", number: "" });
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
              <Li
                key={i}
                onMouseEnter={() => handleMouseOver(text, number)}
                onMouseLeave={handleMouseOut}
              >
                <SpanFlex className={rotate.text === text ? "rotate" : ""}>
                  <HideArrow className={rotate.text === text ? "rotate" : ""}>
                    &rArr;
                  </HideArrow>
                  {[...text].map((el, i) =>
                    link ? (
                      <Span
                        key={i}
                        className={rotate.text === text ? "rotate" : ""}
                      >
                        <a href="https://github.com/luckmer">{el}</a>
                      </Span>
                    ) : (
                      <Span
                        key={i}
                        className={rotate.text === text ? "rotate" : ""}
                      >
                        {el}
                      </Span>
                    )
                  )}
                </SpanFlex>
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
          role="button"
          onBlur=""
          tabIndex={0}
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
