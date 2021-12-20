import React, { useEffect, useContext, useRef } from "react";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//hooks
import useWindowSize from "../../hooks/useWindowSize";

//store
import { AppContext } from "../../store/store";

//styles
import {
  TextAnimation,
  BannerMain,
  Canvas,
  ScrollDown
} from "../styles/banner.styled";

const Banner = () => {
  const { state, functions } = useContext(AppContext);
  const { handleHoverCursor, handleOutMouse } = functions;

  const ref = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    let renderingElement = ref.current;
    let drawingCtx = renderingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");
    let mouse = { x: 0, y: 0 };

    renderingCtx.globalCompositeOperation = "source-over";
    renderingCtx.fillStyle = state.switchTheme ? "#0f0f0f" : "#f9f5f1";
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
      drawingCtx.lineWidth = 200;
      drawingCtx.stroke();

      mouse = { x: currentX, y: currentY };
    });

    if (state.switchTheme) {
      renderingCtx.clearRect(0, 0, size.width, size.height);
      renderingCtx.rect(0, 0, size.width, size.height);
      renderingCtx.fillStyle = state.switchTheme ? "#0f0f0f" : "#f9f5f1";
      renderingCtx.fill();
    }
  }, [size.width, size.height, ref, state.switchTheme]);

  return (
    <BannerMain>
      <TextAnimation>
        <BannerRowCenter title="experience" />
      </TextAnimation>
      <TextAnimation>
        <BannerRowCenter title="inspirations" />
      </TextAnimation>
      <Canvas
        width={size.width}
        height={size.height}
        ref={ref}
        onMouseEnter={() => handleHoverCursor()}
        onMouseLeave={handleOutMouse}
      />
      <ScrollDown>MORE</ScrollDown>
    </BannerMain>
  );
};

export default Banner;
