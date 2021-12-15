import React, { useEffect, createRef, useContext } from "react";
import useWindowSize from "../../hooks/useWindowSize";
import { AppContext } from "../../store/store";
import {
  BannerContainer,
  TextAnimation,
  LettersSpan,
  BannerMain,
  BrandSpan,
  Canvas,
  ScrollDown
} from "../styles/banner.styled";

const Banner = () => {
  const { state } = useContext(AppContext);

  const ref = createRef(null);
  const size = useWindowSize();

  useEffect(() => {
    let renderingElement = ref.current;
    let drawingCtx = renderingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");
    let mouse = { x: 0, y: 0 };

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = state.switchTheme ? "#41443E" : "#E2DACF";
    renderingCtx.fillRect(0, 0, size.width, size.height);

    renderingElement.addEventListener("mouseover", (ev) => {
      mouse.x = ev.pageX - renderingElement.offsetLeft;
      mouse.y = ev.pageY - renderingElement.offsetTop;
    });

    renderingElement.addEventListener("mousemove", (e) => {
      drawingCtx.globalCompositeOperation = "destination-out";
      let currentX = e.pageX - renderingElement.offsetLeft;
      let currentY = e.pageY - renderingElement.offsetTop;

      drawingCtx.lineJoin = "round";
      drawingCtx.beginPath();
      drawingCtx.moveTo(mouse.x, mouse.y);
      drawingCtx.lineTo(currentX, currentY);
      drawingCtx.closePath();
      drawingCtx.lineWidth = 150;
      drawingCtx.stroke();

      mouse = { x: currentX, y: currentY };
    });

    if (state.switchTheme) {
      renderingCtx.clearRect(0, 0, size.width, size.height);
      renderingCtx.rect(0, 0, size.width, size.height);
      renderingCtx.fillStyle = state.switchTheme ? "#41443E" : "#E2DACF";
      renderingCtx.fill();
    }
  }, [size, ref, state]);

  return (
    <BannerMain>
      <TextAnimation>
        <BannerRowCenter title="experience" />
      </TextAnimation>
      <TextAnimation>
        <BannerRowCenter title="brand" />
      </TextAnimation>
      <Canvas width={size.width} height={size.height} ref={ref} />
      <ScrollDown>MORE</ScrollDown>
    </BannerMain>
  );
};

export default Banner;

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
