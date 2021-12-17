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
      width: 36px;
      height: 6px;
      display: block;
      background-color: ${(props) => props.theme.color};
      margin: 8px;
      border-radius: 5px;
    }
  }
`;

export const NavBar = styled.nav`
  height: 0;
  width: 100%;
  position: fixed;
  top: 72px;
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
`;

export const Logo = styled.div`
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  a {
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 800;
    color: ${(props) => props.theme.color};
  }
  span {
    background-color: ${(props) => props.theme.dot};
    height: 16px;
    width: 16px;
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`;
