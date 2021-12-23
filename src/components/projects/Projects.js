import React, { useState, useEffect, useContext, memo } from "react";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//store
import { AppContext } from "../../store/store";
import { index } from "../../api";

//icons
import { MdHideImage } from "react-icons/Md";

//styles
import { HideArrow, Span, SpanFlex, Li } from "../styles/hamburger.styles";
import {
  Section,
  DivContainer,
  HeaderSpacer,
  ImgSpacer,
  Img,
  ImgInformation
} from "../styles/projects.style";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  const updateMousePosition = (ev) => {
    setMousePosition({ x: ev.clientX, y: ev.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

const Projects = () => {
  const { dispatch } = useContext(AppContext);

  const [entered, setEntered] = useState("");
  const [moving, setMoving] = useState(false);
  const mouse = useMousePosition();

  const handleMouseEnter = (name) => {
    dispatch({ type: "ON_PROJECTS", payload: true });
    setEntered(name);
    setMoving(true);
  };

  const handleMouseOut = () => {
    dispatch({ type: "ON_PROJECTS", payload: false });
    setEntered("");
    setMoving(false);
  };

  return (
    <div>
      {index.map((el, i) => {
        return (
          <Section key={i}>
            <DivContainer>
              <HeaderSpacer>
                <Li key={i}>
                  <SpanFlex
                    className={entered === el.name ? "rotate" : ""}
                    onMouseEnter={() => handleMouseEnter(el.name)}
                    onMouseLeave={handleMouseOut}
                  >
                    <HideArrow className={entered === el.name ? "rotate" : ""}>
                      &rArr;
                    </HideArrow>
                    <a href={el.link}>
                      <Span className={entered === el.name ? "rotate" : ""}>
                        {el.name}
                      </Span>
                    </a>
                  </SpanFlex>
                </Li>
                <div>
                  <BannerRowCenter title={el.tech} speed={2} type={true} />
                </div>
                <ImgSpacer style={{ left: mouse.x, top: mouse.y }}>
                  {el.img ? (
                    <Img
                      className={entered === el.name ? "open" : "hide"}
                      src={el.img}
                      alt=""
                    />
                  ) : (
                    <ImgInformation
                      className={entered === el.name ? "open" : "hide"}
                      style={{
                        left: moving && mouse.x,
                        top: moving && mouse.y
                      }}
                    >
                      <MdHideImage />
                    </ImgInformation>
                  )}
                </ImgSpacer>
              </HeaderSpacer>
            </DivContainer>
          </Section>
        );
      })}
    </div>
  );
};

export default memo(Projects);
