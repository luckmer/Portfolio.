import React, { useContext, useEffect, useState } from "react";
import { Link } from "gatsby";

//styles
import { NavBar, Container, Flex, Logo, Hamburger } from "../styles/nav.styled";

//store
import { AppContext } from "../../store/store";

const Nav = () => {
  const [type, setType] = useState({ mode: "light" });
  const { dispatch, functions, state } = useContext(AppContext);
  const { handleHoverCursor, handleOutMouse } = functions;

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

  const handleControlHamburger = () => {
    dispatch({
      type: "HAMBURGER_STATUS",
      payload: !state.switchHamburgerStatus
    });
  };

  return (
    <NavBar>
      <Container>
        <Flex>
          <Logo>
            <Link to="/">PI</Link>
            <span
              onClick={toggleChange}
              role="button"
              styling="link"
              tabIndex={0}
              onKeyDown={toggleChange}
              onMouseEnter={() => handleHoverCursor()}
              onMouseLeave={handleOutMouse}
            >
              .
            </span>
            <Link to="/">TR</Link>
          </Logo>
          <Hamburger
            className={
              state.switchHamburgerStatus ? "animateRotate" : "endAnimateRotate"
            }
            onMouseEnter={() => handleHoverCursor()}
            onMouseLeave={handleOutMouse}
          >
            <button
              onClick={handleControlHamburger}
              onBlur={() => void 0}
              onFocus={() => void 0}
            >
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
