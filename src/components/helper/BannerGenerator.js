import React from "react";

//styles
import {
  BannerContainer,
  BrandSpan,
  LettersSpan,
  Speed,
  TextSpped
} from "../styles/banner.styled";

const BannerRowCenter = ({ title, speed, type }) => {
  if (type) {
    return (
      <BannerContainer>
        <AnimatedText title={title} speed={speed} />
        <AnimatedText title={title} speed={speed} />
        <AnimatedText title={title} speed={speed} />
        <AnimatedText title={title} speed={speed} />
      </BannerContainer>
    );
  }
  return (
    <BannerContainer>
      <AnimatedLetters title={title} speed={speed} />
      <AnimatedLetters title={title} speed={speed} />
      <AnimatedLetters title={title} speed={speed} />
      <AnimatedLetters title={title} speed={speed} />
    </BannerContainer>
  );
};

const AnimatedText = ({ title, speed }) => {
  return (
    <TextSpped speed={speed}>
      <p>{title}</p>
    </TextSpped>
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
