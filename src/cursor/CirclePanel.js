import React from "react";
//images
import rotateBlack from "../images/rotate_black.png";
import rotateWhite from "../images/rotate_white.png";

//styles
import { Rotate } from "../components/styles/content.styled";

const CirclePanel = ({ scrollTop, darkTheme }) => {
  return (
    <Rotate
      src={darkTheme ? rotateWhite : rotateBlack}
      alt={darkTheme ? rotateWhite : rotateBlack}
      rotate={scrollTop}
    />
  );
};

export default CirclePanel;
