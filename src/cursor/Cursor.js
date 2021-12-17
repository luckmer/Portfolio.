import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { AppContext } from "../store/store";

const Cursor = () => {
  const { state } = useContext(AppContext);

  const ref = useRef(null);

  useEffect(() => {
    const mouse = ref.current;

    const setFromEvent = (e) => {
      const { clientX, clientY } = e;

      mouse.style.left = `${clientX}px`;
      mouse.style.top = `${clientY}px`;
    };

    document.addEventListener("mousemove", setFromEvent);

    return () => {
      document.removeEventListener("mousemove", setFromEvent);
    };
  }, []);

  const bump = state.switchCursorBump;

  return <CursorStyle ref={ref} className={bump ? "bump" : ""}></CursorStyle>;
};

export default Cursor;

const CursorStyle = styled.div`
  position: fixed;
  color: white;
  top: 400px;
  left: 400px;
  width: 25px;
  height: 25px;
  background: #ea281e;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  transition: all 300ms ease-out;
  transition-property: width, height, border;
  will-change: width, height, transform, border;
  pointer-events: none;
  z-index: 9998;
  &.bump {
    background: transparent !important;
    width: 55px;
    height: 55px;
    border: 4px solid #ea281e;
    border: 4px solid #ea281e;
  }
`;
