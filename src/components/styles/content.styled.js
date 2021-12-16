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
  cursor: pointer;
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
  font-family: "Raleway", sans-serif;

  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
`;

export const Small = styled.small`
  padding-right: 20px;
  font-size: 6vmin;
`;

export const ContentContainer = styled.div`
  height: 100vh;
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

  h2 {
    margin: auto;
    font-size: 8.5vw;
    width: 80%;
  }

  p {
    margin: auto;
    width: 80%;
    font-size: 5vw;
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

  color: ${(props) => props.theme.darkThemeColor};
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  margin-bottom: calc((36 / 31) * 1rem);

  @media screen and (min-width: 730px) {
    font-size: calc((60 / 31) * 1rem);
  }

  @media screen and (max-width: 730px) {
    font-size: calc((24 / 31) * 1rem);
  }
`;
