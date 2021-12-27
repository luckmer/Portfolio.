import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  padding:0;
  margin:0;
  box-sizing:border-box;

  -webkit-transition: background-color 500ms linear;
  -ms-transition: background-color 500ms linear;
  transition: background-color 500ms linear;
  cursor:none;
}


body{
  background-color:${(props) => props.theme.darkThemeBackground};
}

#gatsby-focus-wrapper{
  display:flex;
}

::-webkit-scrollbar {
  width:0;
}

::selection {
  color: #fff;
  background: #ede6e0;
}


`;

export default GlobalStyle;
