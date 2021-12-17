import styled from "styled-components";

export const UnderLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  border-top: ${(props) => `1px solid ${props.theme.darkThemeColor}`};

  margin-top: calc((40 / 31) * 1rem);
  text-align: center;
  p {
    padding-top: 20px;
    color: ${(props) => props.theme.darkThemeColor};
  }
`;

export const Footer = styled.footer`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: calc((190 / 31) * 1rem) 0 calc((73 / 31) * 1rem);
  text-align: center;
`;

export const H3 = styled.h3`
  font-size: 5vmin;
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.darkThemeColor};
  margin-bottom: calc((48 / 31) * 1 rem);
`;

export const ContactPanel = styled.div`
  margin-top: calc((100 / 31) * 1rem);
  margin-bottom: calc((40 / 31) * 1rem);

  a {
    background: none;
    list-style: none;
    text-decoration: none;
  }
`;

export const H1 = styled.h1`
  @media screen and (min-width: 1226px) {
    font-size: 28vmin;
  }

  @media screen and (max-width: 1226px) {
    font-size: 20vmin;
  }

  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.darkThemeColor};

  transition: 0.5s linear all;
  &:hover {
    -webkit-text-fill-color: ${(props) => props.theme.darkThemeBackground};
    -webkit-text-stroke: 1px ${(props) => props.theme.color};
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  font-size: calc((60 / 31) * 1rem);
  border: none;
  background: none;
  color: ${(props) => props.theme.darkThemeColor};
`;
