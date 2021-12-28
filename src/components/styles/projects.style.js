import styled from "styled-components";
import { motion } from "framer-motion";

export const ImgInformation = styled(motion.div)`
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
    position: relative;
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const ImgSpacer = styled(motion.div)`
  overflow: hidden;

  @media screen and (min-width: 1000px) {
  }

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Img = styled(motion.img)`
  object-fit: contain;
  width: 70vmin;
  position: relative;
  border-radius: 3vmin;
`;
export const Section = styled.div`
  overflow: hidden;

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
  margin-bottom: 5vmin;
  margin-top: 5vmin;

  @media screen and (min-width: 1000px) {
    width: 50%;
    margin-bottom: 5vmin;
    margin-top: 5vmin;
  }

  @media screen and (max-width: 1000px) {
    width: 100%;
    margin-bottom: 20vmin;
    margin-top: 20vmin;
  }
`;
export const HeaderSpacer = styled.div`
  a {
    overflow-y: hidden;

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
