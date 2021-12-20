import React, { useState, useEffect } from "react";
import { index } from "../../api";
import styled, { keyframes } from "styled-components";
import BannerRowCenter from "../helper/BannerGenerator";

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
  const [entered, setEntered] = useState("");
  const mouse = useMousePosition();
  const handleMouseEnter = (name) => {
    setEntered(name);
  };
  const handleMouseOut = () => {
    setEntered("");
  };

  return (
    <div>
      {index.map((el, i) => {
        return (
          <Section key={i}>
            <DivContainer>
              <HeaderSpacer>
                <div>
                  <a href={el.link}>
                    <P
                      onMouseEnter={() => handleMouseEnter(el.name)}
                      onMouseOut={() => handleMouseOut()}
                    >
                      {el.name}
                    </P>
                  </a>
                  <div>
                    <BannerRowCenter title={el.tech} speed={2} type={true} />
                  </div>
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
                      style={{ left: mouse.x, top: mouse.y }}
                    >
                      <p>❌❌❌</p>
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

export default Projects;

const information = keyframes`

0% {
  opacity: 1;
}

50% {
  opacity: 0;
}

100%{
  opacity:1;
}

`;

const ImgInformation = styled.div`
  background-color: ${({ theme }) => theme.darkThemeColor};
  width: auto;
  height: 10vmin;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 6vmin;
  border-radius: 20px;
  color: ${({ theme }) => theme.darkThemeBackground};

  &.hide {
    opacity: 0;
  }

  &.open {
    p {
      animation: ${information} 1200ms linear infinite;
    }
  }
`;

const ImgSpacer = styled.div`
  overflow-x: hidden;
  position: fixed;
  transition: 100ms linear all;
  bottom: 3.5vmin;
  left: 3.5vmin;
  z-index: 1001;
  pointer-events: none;
`;
const Img = styled.img`
  width: 100vmin;
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
  width: 80%;
  margin: auto;
`;

const DivContainer = styled.div`
  color: ${(props) => props.theme.darkThemeColor};

  text-align: left;
  margin-bottom: 100px;
  width: 50%;
  margin-top: 100px;
`;

const HeaderSpacer = styled.div`
  padding-top: 40px;
  padding-bottom: 40px;
  a {
    color: ${({ theme }) => theme.darkThemeColor};
    text-decoration: none;
  }
`;

const P = styled.p`
  font-size: 5.5vw;
  margin: auto;
  font-weight: bolder;
  transform: translateX(${({ scroll }) => `${scroll}px`});
  font-family: "Bakbak One", cursive;
  small {
    font-size: 2vmin;
  }
`;
