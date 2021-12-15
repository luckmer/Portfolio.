import React, { useContext, useEffect, useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { AppContext } from "../../store/store";

const Nav = () => {
  const [type, setType] = useState({ mode: "light" });
  const { dispatch } = useContext(AppContext);

  const Color = type.mode;

  useEffect(() => {
    const store = JSON.parse(localStorage.getItem("color"));
    if (store) setType(store);
  }, []);

  useEffect(() => {
    localStorage.setItem("color", JSON.stringify(type));
  }, [type]);

  const toggleChange = () => {
    setType({ mode: Color === "light" ? "dark" : "light" });
  };

  useEffect(() => {
    dispatch({ type: "DARK_THEME", payload: type.mode === "dark" });
  }, [type.mode, dispatch]);

  return (
    <NavBar>
      <Container>
        <Flex>
          <Logo>
            <Link to="/">PI</Link>
            <span onClick={toggleChange}></span>
            <Link to="/">TR</Link>
          </Logo>
          <Hamburger>
            <button>
              <span></span>
              <span></span>
            </button>
          </Hamburger>
        </Flex>
      </Container>
    </NavBar>
  );
};

export default Nav;

const Hamburger = styled.div`
  display: flex;
  justify-content: center;

  button {
    transform-origin: center;
    border: none;
    background: none;
    outline: none;
    cursor: pointer;

    span {
      width: 36px;
      height: 6px;
      display: block;
      background-color: ${(props) => props.theme.color};
      margin: 8px;
      border-radius: 5px;
    }
  }
`;

const NavBar = styled.nav`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 72px;
  right: 0;
  left: 0;
  z-index: 99;
`;

const Container = styled.section`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: 100%;
  height: 100vh;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-family: "Lausanne-300", Arial, Helvetica, sans-serif;
  a {
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 800;
    color: ${(props) => props.theme.color};
  }
  span {
    background-color: ${(props) => props.theme.dot};
    height: 16px;
    width: 16px;
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
  }
`;
