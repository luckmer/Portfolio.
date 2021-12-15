import React, { createContext, useReducer } from "react";

const initialState = {
  switchTheme: false
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

const reducer = (state, action) => ({
  switchTheme: switchThemePanel(state, action)
});

const AppContext = createContext({ state: initialState, dispatch: () => null });

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
