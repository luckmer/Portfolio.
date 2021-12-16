import React from "react";

//hooks
import UseWindowScrollHook from "../../hooks/useWindowScroll";
import BannerRowCenter from "../helper/BannerGenerator";

//images
import rotateEffect from "../../images/rotateEffect.png";
import Arrow from "../../images/cirlce.png";

//styles
import { TextAnimation } from "../styles/banner.styled";
import {
  Div1,
  MainDivHeader,
  H2,
  Small,
  AnimationPanel,
  ContentContainer,
  CircleSpacer,
  Circle,
  Rotate
} from "../styles/content.styled";

const Content = () => {
  const { scrollTop } = UseWindowScrollHook();

  return (
    <Div1>
      <MainDivHeader>
        <H2>
          <Small>( 001 )</Small>WHO AM I ?
        </H2>
      </MainDivHeader>
      <MainDivHeader>
        <h2>Hi, I'm Piotr</h2>
        <p>
          <span>Design enthusiast</span>
          .<br /> I started my career in 2020 starting with a simple application
          called.
          <br />
          <span>todo list</span>
        </p>

        <p>
          over time I began to create more advanced projects such as checkers,
          chess each time trying to make the level of difficulty was{" "}
          <span>lower</span> higher
        </p>
      </MainDivHeader>

      <AnimationPanel>
        <TextAnimation>
          <BannerRowCenter title="-recent-work-" speed={2} />
        </TextAnimation>
      </AnimationPanel>
      <ContentContainer>
        <H2>
          <Small>( 002 )</Small>Recent Work
        </H2>
        <CircleSpacer>
          <Circle src={Arrow} alt={Arrow} />
        </CircleSpacer>
        <Rotate src={rotateEffect} alt={rotateEffect} rotate={scrollTop} />
      </ContentContainer>
    </Div1>
  );
};

export default Content;
