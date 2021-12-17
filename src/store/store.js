import React, { createContext, useReducer } from "react";

const initialState = {
  switchTheme: false,
  switchCursorBump: false,
  switchHamburgerStatus: false
};

const switchThemePanel = (state, action) => {
  switch (action.type) {
    case "DARK_THEME": {
      return action.payload;
    }

    default:
      return state.switchTheme;
  }
};

const SwitchCursorPanel = (state, action) => {
  switch (action.type) {
    case "CURSOR_OVER":
      return action.payload;
    default:
      return state.switchCursorBump;
  }
};

const SwitchHamburgerPanel = (state, action) => {
  switch (action.type) {
    case "HAMBURGER_STATUS":
      return action.payload;
    default:
      return state.switchHamburgerStatus;
  }
};

const reducer = (state, action) => ({
  switchTheme: switchThemePanel(state, action),
  switchCursorBump: SwitchCursorPanel(state, action),
  switchHamburgerStatus: SwitchHamburgerPanel(state, action)
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
