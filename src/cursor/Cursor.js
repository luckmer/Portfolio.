import React, { useContext, useEffect, useRef } from "react";

//styles
import styled from "styled-components";

//store
import { AppContext } from "../store/store";

const Cursor = () => {
  const { state } = useContext(AppContext);

  const ref = useRef(null);

  useEffect(() => {
    const mouse = ref.current;

    const setFromEvent = (e) => {
      const { clientX, clientY } = e;
      if (!mouse) return;

      mouse.style.left = `${clientX}px`;
      mouse.style.top = `${clientY}px`;
    };

    document.addEventListener("mousemove", setFromEvent);

    return () => {
      document.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const bump = state.switchCursorBump;
  const projectsOn = state.onProjects;

  const mobile = navigator.userAgent;
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      mobile
    ) ||
    /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(mobile)
  ) {
    return <div />;
  } else {
    return (
      <CursorStyle
        ref={ref}
        className={bump ? "bump" : projectsOn ? "hexagon" : ""}
      />
    );
  }
};

export default React.memo(Cursor);

const CursorStyle = styled.div`
  position: fixed;
  color: white;
  top: 400px;
  left: 400px;
  width: 2.5vmin;
  height: 2.5vmin;
  background: #ea281e;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 9999;

  &.bump {
    background: transparent !important;
    width: 5.7vmin;
    height: 5.7vmin;
    border: 0.4vmin solid #ea281e;
  }

  &.hexagon {
    z-index: 0;
    margin: 0 auto;
    width: 10vmin;
    height: 10vmin;
    box-sizing: border-box;
    background-color: red transparent;
    border-radius: 5px;
    position: fixed;
  }
`;
