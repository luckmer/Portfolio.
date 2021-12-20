import styled from "styled-components";

export const CircleSpacer = styled.div`
  display: flex;
  margin: 0 10vmin;
  align-items: center;
  flex-direction: row;
`;

export const Circle = styled.img`
  width: 50vmin;
  height: 50vmin;
  transform: rotate(-45deg);
  stroke-dasharray: 1300;
  stroke-dashoffset: 1300;
  fill: transparent;
  stroke: white;
  transition: 100ms linear all;

  &:hover {
    transform: rotate(-90deg);
  }

  &:active {
    transform: rotate(-90deg) translate(-20px, 0px);
  }
`;

export const H2 = styled.h2`
  font-size: 9.7vw;
  width: 80%;
  margin: auto;
  color: pink;
  font-weight: bolder;
  font-family: "Bakbak One", cursive;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
`;

export const Small = styled.small`
  padding-right: 20px;
  font-size: 6vmin;
`;

export const ContentContainer = styled.div`
  width: 100%;
  text-align: center;
`;

export const AnimationPanel = styled.div`
  width: 100%;
  border-top: ${(props) => `1px solid ${props.theme.darkThemeColor}`};
  border-bottom: ${(props) => `1px solid ${props.theme.darkThemeColor}`};
  margin 200px 0;

  `;

export const Div1 = styled.div`
  padding-top: 200px;
  margin-bottom: 200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const MainDivHeader = styled.div`
  margin: 10vw 0;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.darkThemeColor};
  h2 {
    margin: auto;
    font-size: 8.5vw;
    width: 80%;
  }

  p {
    margin: auto;
    width: 80%;
    font-family: "Bakbak One", cursive;
    @media screen and (max-width: 3372px) {
      font-size: 5vw;
    }

    @media screen and (min-width: 3372px) {
      font-size: 4.2vw;
    }

    padding-bottom: 10vw;
  }

  line-height: 1.3;
  text-transform: uppercase;

  span {
    font-style: italic;
    text-decoration: line-through;
    color: lightsalmon;
    &:hover {
      text-decoration: none;
    }
  }

  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  margin-bottom: calc((36 / 31) * 1vmin);

  @media screen and (min-width: 730px) {
    font-size: calc((60 / 31) * 1vmin);
  }

  @media screen and (max-width: 730px) {
    font-size: calc((24 / 31) * 1vmin);
  }
`;

export const Rotate = styled.img`
  position: fixed;
  width: 15vmin;
  stroke-dasharray: 1300;
  stroke-dashoffset: 1300;
  fill: transparent;
  stroke: white;
  transition: 100ms linear all;
  height: 15vmin;
  bottom: 3.5vmin;
  left: 3.5vmin;
  z-index: 1001;
  transform: rotate(${({ rotate }) => `${rotate}deg`});
  pointer-events: none;
  mix-blend-mode: difference;
`;
