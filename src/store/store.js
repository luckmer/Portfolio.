import React, { createContext, useReducer } from "react";
import {
  switchThemePanel,
  SwitchCursorPanel,
  SwitchHamburgerPanel,
  swichOnProjects,
  switchToProjecs
} from "./reducers/index";

const initialState = {
  switchTheme: false,
  switchCursorBump: false,
  switchHamburgerStatus: false,
  onProjects: false,
  scrollToProjects: false
};

const reducer = (state, action) => ({
  switchTheme: switchThemePanel(state, action),
  switchCursorBump: SwitchCursorPanel(state, action),
  switchHamburgerStatus: SwitchHamburgerPanel(state, action),
  onProjects: swichOnProjects(state, action),
  scrollToProjects: switchToProjecs(state, action)
});

const AppContext = createContext({ state: initialState, dispatch: () => null });

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleHoverCursor = () => {
    dispatch({ type: "CURSOR_OVER", payload: true });
  };

  const handleOutMouse = () => {
    dispatch({ type: "CURSOR_OVER", payload: false });
  };

  const functions = { handleHoverCursor, handleOutMouse };

  return (
    <AppContext.Provider value={{ state, dispatch, functions }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
