import React, { useState, useEffect, useContext, memo } from "react";
import { index } from "../../api";
import styled from "styled-components";
import BannerRowCenter from "../helper/BannerGenerator";
import { AppContext } from "../../store/store";
import { HideArrow, Span, SpanFlex, Li } from "../styles/hamburger.styles";
import { BsImage } from "react-icons/bs";

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
                      <BsImage />
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

const ImgInformation = styled.div`
  @media screen and (min-width: 1000px) {
    background-color: ${({ theme }) => theme.darkThemeColor};
    width: 50vmin;
    height: 20vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20vmin;
    border-radius: 20px;
    color: ${({ theme }) => theme.darkThemeBackground};

    &.hide {
      opacity: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const ImgSpacer = styled.div`
  @media screen and (min-width: 1000px) {
    overflow-x: hidden;
    position: fixed;
    transition: 100ms linear all;
    bottom: 3.5vmin;
    left: 3.5vmin;
    z-index: 1001;
    pointer-events: none;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
const Img = styled.img`
  width: 90vmin;
  object-fit: contain;
  transition: 100ms linear all;
  border-radius: 15px;

  &.hide {
    opacity: 0;
  }

  &.open {
    opacity: 1;
  }
`;

const Section = styled.div`
  @media screen and (min-width: 1000px) {
    width: 90%;
    margin: auto;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin: auto;
  }
`;

const DivContainer = styled.div`
  color: ${(props) => props.theme.darkThemeColor};

  text-align: left;
  margin-bottom: 100px;
  margin-top: 100px;

  @media screen and (min-width: 1000px) {
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;

const HeaderSpacer = styled.div`
  a {
    color: ${({ theme }) => theme.darkThemeColor};
    text-decoration: none;
  }

  @media screen and (max-width: 700px) {
    text-decoration: none;
    display: block;
    position: relative;
    text-transform: uppercase;
    padding-top: 2vmin;
    padding-bottom: 2vmin;
  }

  @media screen and (min-width: 700px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;
