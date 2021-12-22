import React, { useEffect, useContext, useRef, useState } from "react";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//hooks
import useWindowSize from "../../hooks/useWindowSize";

//store
import { AppContext } from "../../store/store";

//canvas options

import { PcCanvasBanner, MobileCanvasBanner } from "./canvas";

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

    const ua = navigator.userAgent;

    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        ua
      ) ||
      /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)
    ) {
      MobileCanvasBanner(renderingElement, state, size);
    } else {
      PcCanvasBanner(renderingCtx, state, size, renderingElement, drawingCtx);
    }
  }, [size.width, size.height, state.switchTheme]);

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
