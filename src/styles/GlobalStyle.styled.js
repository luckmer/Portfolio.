import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;

  -webkit-transition: background-color 500ms linear;
  -ms-transition: background-color 500ms linear;
  transition: background-color 500ms linear;
  font-display: swap;
}


body{
  background-color:${(props) => props.theme.darkThemeBackground};
}


::selection {
  color: #fff;
  background: #ede6e0;
}


`;

export default GlobalStyle;

// ::-webkit-scrollbar {
//   width:0;
// }
// cursor:none;
