import styled, { keyframes } from "styled-components";

export const A = styled.a`
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  text-decoration: none;
  color: ${(props) => props.theme.darkThemeColor};

  @media screen and (min-width: 700px) {
    font-size: 2vmin;
  }

  @media screen and (max-width: 700px) {
    font-size: 5vmin;
  }
`;

export const FooterSpan = styled.span`
  color: ${(props) => props.theme.darkThemeColor};
  @media screen and (min-width: 700px) {
    font-size: 2vmin;
  }

  @media screen and (max-width: 700px) {
    font-size: 5vmin;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid #fff;
  z-index: 1010;
  position: absolute;

  bottom: 0;
  left: 0;
  width: 100%;
  font-size: calc((18 / 31) * 1vmin);
  display: flex;
  justify-content: space-between;
  position: relative;
  text-transform: uppercase;
  padding: calc((53 / 31) * 1vmin) calc((49 / 31) * 1vmin)
    calc((53 / 31) * 1vmin) calc((49 / 31) * 1vmin);
`;

export const HideArrow = styled.span`
  @media screen and (max-width: 700px) {
    display: none;
  }

  transition: all 500ms ease;
  font-size: 10vmin;
  width: 0;
  opacity: 0;
  left: -40%;
  position: relative;
  color: ${(props) => props.theme.darkThemeColor};

  &.rotate {
    opacity: 1;
    width: 10vmin;
    left: 0;
  }
`;

const Open = keyframes`

from{
  transform: translateY(100%);
}
to{
  transform: translateY(0);
}

`;

const hide = keyframes`

from{
  transform: translateY(0);
}
to{
  transform: translateY(-100%);
}

`;

export const SpanFlex = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 500ms ease;
  &.rotate {
    transform: translateX(calc(calc((65 / 31) * 1vmin) * 1.2));
  }

  a {
    text-decoration: none;
    white-space: nowrap;
  }
`;

export const Span = styled.span`
  color: ${(props) => props.theme.darkThemeColor};
  font-size: 15vmin;
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
  width: 100%;
`;

export const Li = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Nav = styled.section`
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 1004;
  display: flex;
  flex-direction: column;
  padding: calc((120 / 31) * 1vmin) calc((53 / 31) * 1vmin) 0;

  li {
    text-decoration: none;
    list-style: none;
  }
`;

export const CounterSpan = styled.span`
  color: ${(props) => props.theme.darkThemeColor};
  font-size: 15vmin;
  text-transform: uppercase;
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  display: inline-flex;
  font-weight: bold;
  transform: translateY(0);
  &.rotate {
    animation: ${Open} 400ms both;

    z-index: 999;
    background: ${(props) => props.theme.darkThemeBackground};
    transform: translateY(0);
  }

  &.out {
    animation: ${hide} 400ms both;

    z-index: -999;
    background: ${(props) => props.theme.darkThemeBackground};
  }

  overflow: hidden;
`;

export const DivCounterSpacer = styled.div`
  margin: 0 2vmin;
  position: absolute;
  right: 3vmin;
  bottom: 3vmin;
  overflow-y: hidden;
`;
