import styled from "styled-components";

export const Hamburger = styled.div`
  display: flex;
  justify-content: center;

  button {
    transform-origin: center;
    border: none;
    background: none;
    outline: none;

    span {
      width: 4vmin;
      height: 0.8vmin;
      display: block;
      background-color: ${(props) => props.theme.color};
      margin: 0.56vmin;
      border-radius: 1vmin;
    }
  }
`;

export const NavBar = styled.nav`
  height: 0;
  width: 100%;
  position: fixed;
  top: 7vmin;
  right: 0;
  left: 0;
  z-index: 99999;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const Container = styled.section`
  flex-grow: 1;
  height: 0;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
`;

export const Flex = styled.div`
  display: flex;
  height: 0;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  a {
    font-size: 2.2vmin;
    text-decoration: none;
    font-weight: 800;
    color: ${(props) => props.theme.color};
  }
  span {
    background-color: ${(props) => props.theme.dot};
    height: 2vmin;
    width: 2vmin;
    margin: 0 0.4vmin;
    border-radius: 100%;
    display: inline-block;
    bottom: 2px;
    overflow: hidden;
  }
`;
