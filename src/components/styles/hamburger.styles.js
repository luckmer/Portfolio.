import styled from "styled-components";

export const A = styled.a`
  font-size: 2vmin;
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: ${(props) => props.theme.darkThemeColor};
`;
export const FooterSpan = styled.span`
  color: ${(props) => props.theme.darkThemeColor};
  font-size: 2vmin;
`;
export const Footer = styled.footer`
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
export const HideArrow = styled.span`
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
export const SpanFlex = styled.div`
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
export const Span = styled.span`
  color: ${(props) => props.theme.darkThemeColor};
  font-size: 13vmin;
  text-transform: uppercase;

  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  transition: all 500ms ease;
  a {
    color: ${(props) => props.theme.darkThemeColor};
  }
  &.rotate {
    transform: rotateY(180deg);
  }
`;
export const Content = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1005;
`;
export const AnimatedDivs = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  pointer-events: none;
`;
export const NavDivs = styled.div`
  background-color: ${(props) => props.theme.darkThemeBackground};
  width: 100%;
  height: 100%;
`;
export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const Li = styled.li`
  display: flex;
  justify-content: flex-start;
`;
export const Nav = styled.section`
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
