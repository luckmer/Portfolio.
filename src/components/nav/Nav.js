import React, { useContext, useEffect, useState } from "react";
import { Link } from "gatsby";

//styles
import { NavBar, Container, Flex, Logo, Hamburger } from "../styles/nav.styled";

//store
import { AppContext } from "../../store/store";

//animations
import { transition } from "../../animations";

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
    if (state.switchHamburgerStatus === true) {
      document.body.style.overflow = "unset";
    } else document.body.style.overflow = "hidden";

    dispatch({
      type: "HAMBURGER_STATUS",
      payload: !state.switchHamburgerStatus
    });
  };

  const hamburgerStatus = state.switchHamburgerStatus;

  return (
    <NavBar
      initial={{ top: "0vmin" }}
      animate={{
        top: "7vmin",
        transition: { delay: 4.1, duration: 1, ...transition }
      }}
    >
      <Container>
        <Flex>
          <Logo color={hamburgerStatus.toString()}>
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
            color={hamburgerStatus.toString()}
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
