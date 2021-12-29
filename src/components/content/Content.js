import React, { useContext, useEffect } from "react";

//hooks
import BannerRowCenter from "../helper/BannerGenerator";

//store
import { AppContext } from "../../store/store";

//styles
import { TextAnimation } from "../styles/banner.styled";
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
import styled from "styled-components";

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
  const [MainContent, inContentView] = useInView();
  const [MainHeader, inHeaderView] = useInView();
  const [Mainwork, inWorkView] = useInView();

  useEffect(() => {
    inHeaderView ? header.start("visible") : header.start("hidden");
  }, [header, inHeaderView]);

  useEffect(() => {
    inWorkView ? work.start("visible") : work.start("hidden");
  }, [work, inWorkView]);

  useEffect(() => {
    inContentView ? content.start("visible") : content.start("hidden");
  }, [content, inContentView]);

  useEffect(() => {
    inDescriptionView
      ? description.start("visible")
      : description.start("hidden");
  }, [description, inDescriptionView]);

  return (
    <Div1>
      <MainDivHeader ref={MainHeader}>
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
      <MainDivHeader ref={MainContent}>
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
      <MainDivHeader ref={MainDescription}>
        <motion.p
          animate={description}
          custom={0.2}
          initial="hidden"
          variants={TextVariant}
        >
          over time I began to create more advanced projects such as checkers,
          chess each time trying to make the level of difficulty was higher
        </motion.p>
      </MainDivHeader>
      <AnimationPanel>
        <TextAnimation>
          <BannerRowCenter title="-recent-work-" speed={2} />
        </TextAnimation>
      </AnimationPanel>
      <ContentContainer ref={Mainwork}>
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
