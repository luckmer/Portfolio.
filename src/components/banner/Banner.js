import React, { useState, useEffect, createRef } from "react";

import styled, { keyframes } from "styled-components";

const rotate = keyframes`
0% {
  transform: translate3d(0%, 0, 0);
}

100% {
  transform: translate3d(-100%, 0, 0);
}
`;

const reverseRotate = keyframes`
0% {
  transform: translate3d(-100%, 0, 0);
}

100% {
  transform: translate3d(0%, 0, 0);
}
`;

const BannerMain = styled.section`
  height: 100vh;
  width: 100%;
  margin-bottom: 296px;
  display: flex;
  flex-direction: column;
`;

const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: block;
  z-index: 2;
`;

const TextAnimation = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Banner = () => {
  const ref = createRef(null);

  useEffect(() => {
    const canvas = ref.current;

    console.log(canvas);
  }, [ref]);

  return (
    <BannerMain>
      <TextAnimation>
        <BannerRowCenter title="experience" />
      </TextAnimation>
      <TextAnimation>
        <BannerRowCenter title="brand" />
      </TextAnimation>
      <Canvas ref={ref} />
    </BannerMain>
  );
};

export default Banner;

const AnimatedLetters = ({ title }) => {
  const Header = title === "brand" ? BrandSpan : LettersSpan;

  return (
    <Header>
      {[...title].map((letter, i) => (
        <p key={i}>{letter}</p>
      ))}
    </Header>
  );
};

const BannerRowCenter = ({ title }) => {
  return (
    <BannerContainer>
      <AnimatedLetters title={title} />
      <AnimatedLetters title={title} />
      <AnimatedLetters title={title} />
      <AnimatedLetters title={title} />
    </BannerContainer>
  );
};

const LetterContainer = styled.span`
  width: auto;
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
`;

const BrandSpan = styled(LetterContainer)`
  animation: ${reverseRotate} 10s linear infinite;
`;

const LettersSpan = styled(LetterContainer)`
  animation: ${rotate} 10s linear infinite;
`;

const BannerContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  position: relative;
  display: flex;
`;
