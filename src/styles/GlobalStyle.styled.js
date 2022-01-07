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

::-webkit-scrollbar {
  width:0;
}


#calendar,  #game,  #videoapp,#battleship, #pacman, #checkers, #chess, #noteapp , #candy , #tetris ,  #blog  {
  width: 110vmin !important;
  height: 50vmin !important;

}

#calendar canvas, #battleship canvas , #game canvas, #videoapp canvas, #pacman canvas,
 #checkers canvas, #chess canvas, #noteapp canvas, #candy canvas, #tetris canvas,  #blog canvas {
  border-radius:2vmin;
  position:absolute;
  
  z-index:-1;

  @media screen and (min-width : 1000px){
    left:3vmin;
  }

  @media screen and (max-width : 1000px){
    display:none;
  }

}



::selection {
  color: #fff;
  background: #ede6e0;
}


`;

export default GlobalStyle;
