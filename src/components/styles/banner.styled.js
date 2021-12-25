import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const rotate = keyframes`
0% {
  transform: translate3d(0%, 0, 0);
}

100% {
  transform: translate3d(-100%, 0, 0);
}
`;

export const reverseRotate = keyframes`
0% {
  transform: translate3d(-100%, 0, 0);
}

100% {
  transform: translate3d(0%, 0, 0);
}
`;

export const LetterContainer = styled.span`
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10vw;

  p {
    font-size: min(28vmin, 28vmin);
    font-weight: bold;
    color: ${(props) => props.theme.color} !important;

    -webkit-transition: color 500ms linear !important;
    -ms-transition: color 500ms linear !important;
    transition: color 500ms linear !important;
  }

  &:hover {
    text-decoration: line-through;
    color: lightsalmon;
  }
`;

export const BrandSpan = styled(LetterContainer)`
  animation: ${reverseRotate} 12s linear infinite;
`;

export const LettersSpan = styled(LetterContainer)`
  animation: ${rotate} 12s linear infinite;
`;

export const Speed = styled(LetterContainer)`
  animation: ${rotate} 8s linear infinite;
  transition: all 1000ms ease !important;

  p {
    -webkit-text-fill-color: ${(props) => props.theme.darkThemeBackground};
    -webkit-text-stroke: 1px ${(props) => props.theme.color};
    font-size: 12vmin;
  }
`;

export const TextSpped = styled.span`
  animation: ${reverseRotate} 12s linear infinite;
  position: relative;
  font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 100%;
  padding: 0 10vmin;
  display: block;
  white-space: nowrap;

  p {
    transition: all 500ms ease !important;
    font-weight: bold;
    color: ${(props) => props.theme.dot};
    font-size: 2vmin;
  }
`;

export const LowSpeed = styled(LetterContainer);

export const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  display: flex;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;

export const BannerMain = styled.section`
transition: all 500ms ease !important;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.darkThemeBackground};

  @media screen and (min-width: 700px) {
    margin-bottom: 296px;
  }

  
  @media screen and (max-width: 700px) {
    margin-bottom:100vmin;
`;

export const Canvas = styled.canvas`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  width: 100%;
  height: 100%;
  z-index: 998;
  &.mobile {
    z-index: 999;
  }
`;

export const TextAnimation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

export const ScrollDown = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 1vmin;
  pointer-events: none;
  z-index: 999;
  color: ${(props) => props.theme.color};
  font-family: sans-serif;
  display: flex;
  white-space nowrap;
  overflow-y:hidden;
  height: 20vmin;
  align-items: flex-end;

  
`;

export const BannerP = styled(motion.p)`
  font-size: 28vmin;
  line-height: 0.67;

  position: relative;
`;
