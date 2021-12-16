import React from "react";
import {
  BannerContainer,
  BrandSpan,
  LettersSpan,
  Speed
} from "../styles/banner.styled";

const BannerRowCenter = ({ title, speed }) => {
  return (
    <BannerContainer>
      <AnimatedLetters title={title} speed={speed} />
      <AnimatedLetters title={title} speed={speed} />
      <AnimatedLetters title={title} speed={speed} />
      <AnimatedLetters title={title} speed={speed} />
    </BannerContainer>
  );
};

const AnimatedLetters = ({ title, speed }) => {
  const Header = speed
    ? Speed
    : title === "inspirations"
    ? BrandSpan
    : LettersSpan;

  return (
    <Header speed={speed}>
      {[...title].map((letter, i) => (
        <p key={i}>{letter}</p>
      ))}
    </Header>
  );
};

export default BannerRowCenter;
