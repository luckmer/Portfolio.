import styled from "styled-components";
import { motion } from "framer-motion";

export const CircleSpacer = styled.div`
  display: flex;
  margin: 0 10vmin;
  align-items: center;
  flex-direction: row;
`;

export const Circle = styled.img`
  width: 50vmin;
  height: 50vmin;
  transform: rotate(-45deg);
  stroke-dasharray: 1300;
  stroke-dashoffset: 1300;
  fill: transparent;
  stroke: white;
  transition: 100ms linear all;

  &:hover {
    transform: rotate(-90deg);
  }

  &:active {
    transform: rotate(-90deg) translate(-20px, 0px);
  }
`;

export const H = styled(motion.div)`
  white-space: nowrap;
  display: flex;
  align-items: center;
  font-size: 9.7vw;
  width: 80%;
  position: relative;
  overflow: hidden;
  margin: auto;
  color: #ef3f24;
  font-weight: bolder;
  font-family: "Bakbak One", cursive;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;

  @media screen and (max-width: 700px) {
    white-space: nowrap;
  }

  h2 {
    position: relative;
  }
`;
export const H2 = styled(motion.h2)`
  font-size: 9.7vw;
  width: 80%;
  position: relative;
  overflow: hidden;
  margin: auto;
  color: #ef3f24;
  font-weight: bolder;
  font-family: "Bakbak One", cursive;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;

  @media screen and (max-width: 700px) {
    white-space: nowrap;
  }
`;

export const Small = styled(motion.small)`
  padding-right: 20px;
  font-size: 6vmin;
  position: relative;
  color: #ef3f24;
  font-weight: bolder;
  font-family: "Bakbak One", cursive;
`;

export const ContentContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const AnimationPanel = styled.div`
  width: 100%;
  border-top: ${(props) => `0.2vmin solid ${props.theme.darkThemeColor}`};
  border-bottom: ${(props) => `0.2vmin solid ${props.theme.darkThemeColor}`};
  @media screen and (min-width: 700px) {
    margin: 20vmin 0;
  }

  @media screen and (max-width: 700px) {
    margin-top: 100vmin;
    margin-bottom: 20vmin;
  }
`;

export const Div1 = styled.div`
  margin-bottom: 20vmin;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  @media screen and (min-width: 700px) {
    padding-top: 20vmin;
  }
`;

export const MainDivHeader = styled(motion.div)`
  margin: 10vw 0;
  width: 100%;
  text-align: inherit;
  overflow: hidden;
  position: relative;
  color: ${(props) => props.theme.darkThemeColor};

  p {
    margin: auto;
    position: relative;
    width: 80%;
    font-family: "Bakbak One", cursive;
    @media screen and (max-width: 3372px) {
      font-size: 5vw;
    }

    @media screen and (min-width: 3372px) {
      font-size: 4.2vw;
    }

    padding-bottom: 10vw;
  }

  line-height: 1.3;
  text-transform: uppercase;

  span {
    font-style: italic;
    text-decoration: line-through;
    color: #ef3f24;
    &:hover {
      text-decoration: none;
    }
  }

  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  margin-bottom: calc((36 / 31) * 1vmin);

  &:nth-child(3) {
    margin-top: calc((36 / 31) * 30vmin);
    margin-bottom: calc((36 / 31) * 1vmin);
  }

  @media screen and (min-width: 730px) {
    font-size: calc((60 / 31) * 1vmin);
  }

  @media screen and (max-width: 730px) {
    font-size: calc((24 / 31) * 1vmin);
  }
`;

export const Rotate = styled.img`
  position: fixed;
  width: 15vmin;
  stroke-dasharray: 1300;
  stroke-dashoffset: 1300;
  fill: transparent;
  stroke: white;
  transition: 100ms linear all;
  height: 15vmin;
  bottom: 3.5vmin;
  left: 3.5vmin;
  z-index: 1001;
  transform: rotate(${({ rotate }) => `${rotate}deg`});
  pointer-events: none;
  mix-blend-mode: difference;
`;
