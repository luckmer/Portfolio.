import React, { useContext, useEffect } from "react";

//hooks
import BannerRowCenter from "../helper/BannerGenerator";

//store
import { AppContext } from "../../store/store";

//styles
import { TextAnimation } from "../styles/banner.styled";
import styled from "styled-components";
import {
  Div1,
  MainDivHeader,
  H,
  Small,
  AnimationPanel,
  ContentContainer
} from "../styles/content.styled";

//components
import Projects from "../projects/Projects";

//animations
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

//animations
import {
  ContactVariant,
  squareVariants,
  TextVariant
} from "../../animations/variants";

const Content = () => {
  const { functions } = useContext(AppContext);
  const { handleHoverCursor, handleOutMouse } = functions;

  const description = useAnimation();
  const work = useAnimation();
  const content = useAnimation();
  const header = useAnimation();

  const [MainDescription, inDescriptionView] = useInView();
  const MainDescriptionRef = React.useRef();

  const [MainContent, inContentView] = useInView();
  const MainContentRef = React.useRef();

  const [MainHeader, inHeaderView] = useInView();
  const MainHeaderRef = React.useRef();

  const [Mainwork, inWorkView] = useInView();
  const MainworkRef = React.useRef();

  useEffect(() => {
    inHeaderView && header.start("visible");
  }, [header, inHeaderView]);

  useEffect(() => {
    inWorkView && work.start("visible");
  }, [work, inWorkView]);

  useEffect(() => {
    inContentView && content.start("visible");
  }, [content, inContentView]);

  useEffect(() => {
    inDescriptionView && description.start("visible");
  }, [description, inDescriptionView]);

  const mainCallback = React.useCallback(
    (node) => {
      MainDescriptionRef.current = node;
      MainDescription(node);
    },
    [MainDescription]
  );

  const contentCallback = React.useCallback(
    (node) => {
      MainContentRef.current = node;
      MainContent(node);
    },
    [MainContent]
  );

  const headerCallback = React.useCallback(
    (node) => {
      MainHeaderRef.current = node;
      MainHeader(node);
    },
    [MainHeader]
  );

  const workCallback = React.useCallback(
    (node) => {
      MainworkRef.current = node;
      Mainwork(node);
    },
    [Mainwork]
  );

  return (
    <Div1>
      <MainDivHeader ref={headerCallback}>
        <H>
          <Small animate={header} initial="hidden" variants={squareVariants}>
            ( 001 )
          </Small>
          {["WHO", "AM", "I ?"].map((el, i) => (
            <HeaderDiv key={i}>
              {[...el].map((text, i) => (
                <motion.h2
                  key={i}
                  custom={Math.abs(i / 12)}
                  variants={ContactVariant}
                  animate={header}
                  initial="hidden"
                >
                  {text}
                </motion.h2>
              ))}
            </HeaderDiv>
          ))}
        </H>
      </MainDivHeader>
      <MainDivHeader ref={contentCallback}>
        <HideText>
          <H2Spacer
            animate={content}
            initial="hidden"
            variants={ContactVariant}
          >
            Hi, I'm Piotr
          </H2Spacer>
        </HideText>
        <motion.p
          animate={content}
          custom={1}
          initial="hidden"
          variants={TextVariant}
        >
          <span
            tabIndex={0}
            role="button"
            onMouseEnter={() => handleHoverCursor()}
            onMouseLeave={handleOutMouse}
          >
            Design enthusiast
          </span>
          .<br /> I started my career in June 2020 starting with a simple
          application called.
          <br />
          <span
            tabIndex={0}
            role="button"
            onMouseEnter={() => handleHoverCursor()}
            onMouseLeave={handleOutMouse}
          >
            todo list
          </span>
        </motion.p>
      </MainDivHeader>
      <MainDivHeader ref={mainCallback}>
        <motion.p
          animate={description}
          custom={0.2}
          initial="hidden"
          variants={TextVariant}
        >
          Over time I began creating more and more advanced projects like
          checkers,chess or this website. Each time increasing the difficulty
          bar ever higher, just to challenge myself.
        </motion.p>
      </MainDivHeader>
      <AnimationPanel>
        <TextAnimation>
          <BannerRowCenter title="-recent-work-" speed={2} />
        </TextAnimation>
      </AnimationPanel>
      <ContentContainer ref={workCallback}>
        <RecentSlicer>
          <Small animate={work} initial="hidden" variants={squareVariants}>
            ( 001 )
          </Small>
          {["RECENT", "WORK"].map((el, i) => (
            <HeaderDiv key={i}>
              {[...el].map((text, i) => (
                <motion.h2
                  key={i}
                  custom={Math.abs(i / 12)}
                  variants={ContactVariant}
                  animate={work}
                  initial="hidden"
                >
                  {text}
                </motion.h2>
              ))}
            </HeaderDiv>
          ))}
        </RecentSlicer>
        <Projects />
      </ContentContainer>
    </Div1>
  );
};

export default React.memo(Content);

const RecentSlicer = styled.div`
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const HeaderDiv = styled.div`
  display: flex;
  white-space: nowrap;
  padding: 0 2vmin;
  h2 {
    font-size: 8.5vw;
    padding: 0 0.2vmin;
  }
  position: relative;
  overflow: hidden;

  h2 {
    position: relative;
    color: #ef3f24;
    font-weight: bolder;
    font-family: "Bakbak One", cursive;
  }
`;

const H2Spacer = styled(motion.h2)`
  font-size: 8.5vw;
  max-width: 80%;
  margin: auto;
  position: relative;
`;

const HideText = styled(motion.div)`
  position: relative;
  overflow: hidden;
`;
