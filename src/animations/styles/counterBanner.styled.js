import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const hideImg = keyframes`
  0%{
    transform:scale(1);
  }

  50%{
    transform:scale(0.9);
  }

  100%{
    opacity:0;
    transform:scale(0.9);
  }
`;
const ShowImg = keyframes`
  from{
    opacity:0;
  }

  to{
    opacity:1;
  }
`;
const ShowP = keyframes`
  from{
    top:100%
  }

  to{
    top:0;
  }
`;
const hideP = keyframes`
from{
  top:0%
}

to{
  top:100%;
}
`;
export const CounterDiv = styled.div`
  width: 45vmin;
  height: 45vmin;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Img = styled(motion.img)`
  width: 40vmin;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: block;
  animation-delay: 2s;
  margin: auto;

  &.test {
    animation: ${ShowImg} 1000ms linear forwards;
  }

  &.animate {
    animation: ${hideImg} 500ms linear forwards;
  }
`;
export const P = styled(motion.p)`
  position: absolute;
  top: 0;
  font-size: 10vmin;
  width: 100%;
  color: ${(props) => props.theme.darkThemeBackground};
  height: 100%;
  animation: ${ShowP} 500ms linear forwards;

  &.animate {
    animation: ${hideP} 500ms linear forwards;
  }
`;
export const DivP = styled.div`
  width: 25vmin;
  height: 10vmin;
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  overflow: hidden;
  position: relative;

  text-align: center;
`;
export const CounterPanel = styled(motion.div)`
  position: fixed;
  z-index: 9999999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;
export const DivSlicer = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${(props) => props.theme.darkThemeColor};
`;
export const MainSlicer = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  pointer-events: none;
`;
