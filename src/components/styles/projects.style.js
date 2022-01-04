import styled from "styled-components";

export const Section = styled.div`
  overflow: hidden;

  @media screen and (min-width: 1000px) {
    width: 90%;
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
