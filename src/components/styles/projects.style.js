import styled from "styled-components";

export const ImgInformation = styled.div`
  @media screen and (min-width: 1000px) {
    background-color: ${({ theme }) => theme.darkThemeColor};
    width: 50vmin;
    height: 20vmin;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20vmin;
    border-radius: 2vmin;
    color: ${({ theme }) => theme.darkThemeBackground};

    &.hide {
      opacity: 0;
    }
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const ImgSpacer = styled.div`
  @media screen and (min-width: 1000px) {
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
export const Img = styled.img`
  width: 90vmin;
  object-fit: contain;
  transition: 100ms linear all;
  border-radius: 2vmin;

  &.hide {
    opacity: 0;
  }

  &.open {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;
export const Section = styled.div`
  @media screen and (min-width: 1000px) {
    width: 90%;
    margin: auto;
  }

  @media screen and (max-width: 1000px) {
    width: 80%;
    margin: auto;
  }
`;
export const DivContainer = styled.div`
  color: ${(props) => props.theme.darkThemeColor};

  text-align: left;
  margin-bottom: 20vmin;
  margin-top: 20vmin;

  @media screen and (min-width: 1000px) {
    width: 50%;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
`;
export const HeaderSpacer = styled.div`
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
    padding-top: 5vmin;
    padding-bottom: 5vmin;
  }
`;
