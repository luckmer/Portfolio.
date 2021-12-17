import React from "react";
//images
import rotateEffect from "../images/rotateEffect.png";

//styles
import { Rotate } from "../components/styles/content.styled";

const CirclePanel = ({ scrollTop }) => {
  return <Rotate src={rotateEffect} alt={rotateEffect} rotate={scrollTop} />;
};

export default CirclePanel;
