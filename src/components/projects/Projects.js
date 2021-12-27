import React, { useState, useContext, memo } from "react";

//helper
import BannerRowCenter from "../helper/BannerGenerator";

//store
import { AppContext } from "../../store/store";
import { index } from "../../api";

//icons
import { MdHideImage } from "react-icons/md";

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

//hooks
import useMousePosition from "../../hooks/useMousePosition";

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

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

  const work = sliceIntoChunks(index, 2);

  return (
    <div>
      {work.map((data, index) => (
        <div key={index}>
          {data.map((el, i) => (
            <Section key={i}>
              <DivContainer>
                <HeaderSpacer>
                  <Li>
                    <SpanFlex
                      className={entered === el.name ? "rotate" : ""}
                      onMouseEnter={() => handleMouseEnter(el.name)}
                      onMouseLeave={handleMouseOut}
                    >
                      <HideArrow
                        changecolor={true.toString()}
                        className={entered === el.name ? "rotate" : ""}
                      >
                        &rArr;
                      </HideArrow>
                      <a href={el.link}>
                        <Span
                          className={entered === el.name ? "rotate" : ""}
                          changecolor={true}
                          id={i}
                        >
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
          ))}
        </div>
      ))}
    </div>
  );
};

export default memo(Projects);
