import styled, { keyframes } from "styled-components";

const rotate = keyframes`

0%{
  transform: rotate(0deg);
  margin-bottom: 0.56vmin;
}


20%{
  margin-bottom: -0;
  transform: rotate(0deg);
}


100%{
  margin-bottom: -0.1vmin;
  transform: rotate(-45deg);
}


`;

const rotateB = keyframes`

0%{
  transform: rotate(0deg);
  margin-top: 0.56vmin;
}


20%{
  margin-top: 0;
  transform: rotate(0deg);
}


100%{
  margin-top: -0.1vmin;
  transform: rotate(45deg);
}



`;

const spin = keyframes`

0%{
  transform: rotate(0deg);
}

50%{
  transform: rotate(215deg);
}

100%{
  transform: rotate(180deg);
}

`;

const uspin = keyframes`

from{
  transform: rotate(180deg);
}

to{
  transform: rotate(0deg);
}

`;

const unRotate = keyframes`


0%{
  margin: -0.1vmin;
  transform: rotate(-45deg);
}


70%{
  margin: -0.1vmin;
  transform: rotate(0deg);
}


100%{
  margin-bottom: 0.56vmin;
  transform: rotate(0deg);
}

`;

const unRotateB = keyframes`

0%{
  margin: -0.1vmin;
  transform: rotate(45deg);
}


70%{
  margin: -0.1vmin;

  transform: rotate(0deg);
  
}


100%{
  margin-top: 0.56vmin;
  transform: rotate(0deg);
}


`;

export const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  button {
    transform-origin: center;
    border: none;
    background: none;
    outline: none;
    z-index: 9999;
    padding: 6px;
    width: 5vmin;
    height: 5vmin;
    border-radius: 100%;
    span {
      width: 4vmin;
      height: 0.2vmin;
      display: block;
      background-color: ${(props) => props.theme.color};
      margin: 0.56vmin;
      border-radius: 1vmin;
    }
  }

  &.animateRotate {
    animation: ${spin} 2000ms forwards;
    animation-delay: 200ms;
    span {
      margin: -0.1vmin;
      &:nth-child(1) {
        animation: ${rotate} 1600ms forwards;
      }
      &:nth-child(2) {
        animation: ${rotateB} 1600ms forwards;
      }
    }
  }

  &.endAnimateRotate {
    animation: ${uspin} 1000ms forwards;
    span {
      margin: -0.1vmin;
      &:nth-child(1) {
        animation: ${unRotate} 1200ms forwards;
      }
      &:nth-child(2) {
        animation-delay: 600ms;
        animation: ${unRotateB} 1200ms forwards;
      }
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
  background: none;

  a {
    font-family: "Bakbak One", cursive;
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
    border: none;
    border-radius: 100%;
    display: inline-block;
    bottom: 2px;
    overflow: hidden;
  }
`;
