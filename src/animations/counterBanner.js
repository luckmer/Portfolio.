import React, { useRef, useEffect, useContext, Fragment } from "react";

//img
import LoadingImg from "../images/loading.png";
import lightLoadingImg from "../images/white_loading.png";
//styles

//framer-motion
import { animate } from "framer-motion";
import { AppContext } from "../store/store";

//styles
import {
  CounterPanel,
  CounterDiv,
  Img,
  DivP,
  P,
  MainSlicer,
  DivSlicer
} from "./styles/counterBanner.styled";

//animations
import { transition } from "./index";

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
        imgNode.classList.add("animate");
      }
    });

    const controls = animate(0, 100, {
      duration: 2.5,
      delay: 0.5,

      onUpdate(value) {
        node.textContent = `${value.toFixed(0)}%`;
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
    window.scrollTo({ top: 0 });
  };

  const onStart = () => {
    document.body.style = "overflow:hidden; position:relative;";
  };

  const variants = {
    visible: (custom) => ({
      x: "-100%",
      transition: { ...transition, delay: custom }
    })
  };

  const imgOption = state.switchTheme;

  return (
    <Fragment>
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
          custom={3.4}
          animate="visible"
          variants={variants}
          onAnimationStart={() => onStart()}
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
    </Fragment>
  );
};

export default CounterBanner;
