import React, { useEffect, useContext, useRef } from "react";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//hooks
import useWindowSize from "../../hooks/useWindowSize";

//store
import { AppContext } from "../../store/store";

//canvas
import { PcCanvasBanner, MobileCanvasBanner } from "./canvas";

//styles
import {
  TextAnimation,
  BannerMain,
  Canvas,
  ScrollDown,
  BannerP
} from "../styles/banner.styled";

//animations
import { Bannervariant } from "../../animations/variants";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Banner = () => {
  const { state, functions } = useContext(AppContext);
  const { handleHoverCursor, handleOutMouse } = functions;
  const [mainContact, inContactView] = useInView();
  const contact = useAnimation();
  const animateRef = React.useRef();
  const ref = useRef(null);
  const size = useWindowSize();

  useEffect(() => {
    let renderingElement = ref.current;

    let drawingCtx = renderingElement.getContext("2d");
    let renderingCtx = renderingElement.getContext("2d");

    const mobile = navigator.userAgent;

    if (
      /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
        mobile
      ) ||
      /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(mobile)
    ) {
      MobileCanvasBanner(renderingElement, state.switchTheme, size);
    } else {
      PcCanvasBanner(
        renderingCtx,
        state.switchTheme,
        size,
        renderingElement,
        drawingCtx
      );
    }
  }, [size.width, size.height, state.switchTheme, size]);

  useEffect(() => {
    setTimeout(() => {
      inContactView && contact.start("visible");
    }, 4200);
  }, [contact, inContactView]);

  const setRefs = React.useCallback(
    (node) => {
      animateRef.current = node;
      mainContact(node);
    },
    [mainContact]
  );

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
      <ScrollDown ref={setRefs}>
        {[..."MORE"].map((el, i) => (
          <BannerP
            key={i}
            initial="hidden"
            animate={contact}
            custom={Math.abs(i / 6)}
            variants={Bannervariant}
          >
            {el}
          </BannerP>
        ))}
      </ScrollDown>
    </BannerMain>
  );
};

export default React.memo(Banner);
