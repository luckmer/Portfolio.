import React, { useRef, useEffect, useContext } from "react";

//img
import LoadingImg from "../images/loading.png";
import lightLoadingImg from "../images/white_loading.png";
//styles
import styled, { keyframes } from "styled-components";

//framer-motion
import { motion, animate } from "framer-motion";
import { AppContext } from "../store/store";

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

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

const CounterBanner = () => {
  const { state } = useContext(AppContext);

  const nodeRef = useRef(null);
  const rotateImg = useRef(null);

  useEffect(() => {
    const node = nodeRef.current;
    const imgNode = rotateImg.current;

    const ImgControls = animate(0, 100, {
      duration: 2.5,
      delay: 0.5,
      onPlay: () => {
        imgNode.classList.add("test");
      },

      onUpdate(value) {
        imgNode.style.transform = `rotate(${value * 3.6}deg)`;
      },

      onComplete: () => {
        imgNode.classList.remove("test");
        imgNode.classList.add("animate");
      }
    });

    const controls = animate(0, 100, {
      duration: 2.5,
      delay: 0.5,

      onUpdate(value) {
        node.textContent = value.toFixed(0);
      },

      onComplete: () => {
        node.classList.add("animate");
      }
    });

    return () => {
      controls.stop();
      ImgControls.stop();
    };
  }, []);

  const handleAnimationEnd = () => {
    document.body.style.overflow = "unset";
  };

  const onStart = () => {
    document.body.style.overflow = "hidden";
  };

  const variants = {
    visible: (custom) => ({
      x: "-100%",
      transition: { ...transition, delay: custom }
    })
  };

  const imgOption = state.switchTheme;

  return (
    <>
      <CounterPanel custom={3.6} animate="visible" variants={variants}>
        <CounterDiv>
          <Img
            src={imgOption ? LoadingImg : lightLoadingImg}
            alt={imgOption ? LoadingImg : lightLoadingImg}
            ref={rotateImg}
          />
          <DivP>
            <P ref={nodeRef}>0</P>
          </DivP>
        </CounterDiv>
      </CounterPanel>
      <MainSlicer variants={variants}>
        <DivSlicer
          onAnimationStart={() => onStart()}
          custom={3.4}
          animate="visible"
          variants={variants}
        />
        <DivSlicer custom={3.45} animate="visible" variants={variants} />
        <DivSlicer custom={3.5} animate="visible" variants={variants} />
        <DivSlicer custom={3.55} animate="visible" variants={variants} />
        <DivSlicer
          custom={3.6}
          animate="visible"
          variants={variants}
          onAnimationComplete={() => handleAnimationEnd()}
        />
      </MainSlicer>
    </>
  );
};

export default CounterBanner;

const CounterDiv = styled.div`
  width: 40vmin;
  height: 40vmin;
  overflow: hidden;
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled(motion.img)`
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
    animation: ${ShowImg} 500ms linear forwards;
  }

  &.animate {
    animation: ${hideImg} 500ms linear forwards;
  }
`;

const P = styled(motion.p)`
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

const DivP = styled.div`
  width: 20vmin;
  height: 10vmin;
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  overflow: hidden;
  position: relative;

  text-align: center;
`;

const CounterPanel = styled(motion.div)`
  position: fixed;
  z-index: 9999999;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
`;

const DivSlicer = styled(motion.div)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: ${(props) => props.theme.darkThemeColor};
`;

const MainSlicer = styled(motion.div)`
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
