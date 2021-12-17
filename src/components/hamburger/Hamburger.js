import React, { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../store/store";
import styled from "styled-components";

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
                      <a href={link}>
                        <Span
                          key={i}
                          className={rotate.text === text ? "rotate" : ""}
                        >
                          {el}
                        </Span>
                      </a>
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
        <div onMouseEnter={handleHoverCursor} onMouseOut={handleOutMouse}>
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

const A = styled.a`
  font-size: 2vmin;
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: ${(props) => props.theme.darkThemeColor};
`;

const FooterSpan = styled.span`
  color: ${(props) => props.theme.darkThemeColor};
  font-size: 2vmin;
`;

const Footer = styled.footer`
  z-index: 1010;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  font-size: calc((18 / 31) * 1rem);
  display: flex;
  justify-content: space-between;
  position: relative;
  text-transform: uppercase;
  padding: 0 calc((53 / 31) * 1rem) calc((49 / 31) * 1rem);
`;

const HideArrow = styled.span`
  transition: all 500ms ease;
  font-size: 10vmin;
  width: 0;
  opacity: 0;
  left: -40%;
  position: relative;

  &.rotate {
    opacity: 1;
    width: 70px;
    left: -7%;
  }
`;

const SpanFlex = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 500ms ease;
  &.rotate {
    transform: translateX(calc(calc((65 / 31) * 1rem) * 1.2));
  }

  a {
    text-decoration: none;
  }
`;

const Span = styled.span`
  color: ${(props) => props.theme.darkThemeColor};
  font-size: 13vmin;
  text-transform: uppercase;

  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  transition: all 500ms ease;

  &.rotate {
    transform: rotateY(180deg);
  }
`;

const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1005;
`;

const AnimatedDivs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  pointer-events: none;
`;

const NavDivs = styled.div`
  background-color: ${(props) => props.theme.darkThemeBackground};
  width: 100%;
  height: 100%;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Li = styled.li`
  display: flex;
  justify-content: flex-start;
`;

const Nav = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1004;
  display: flex;
  flex-direction: column;
  padding: calc((120 / 31) * 1rem) calc((53 / 31) * 1rem) 0;

  li {
    text-decoration: none;
    list-style: none;
  }
`;
