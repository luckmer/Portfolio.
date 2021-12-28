export const switchThemePanel = (state, action) => {
  switch (action.type) {
    case "DARK_THEME": {
      return action.payload;
    }

    default:
      return state.switchTheme;
  }
};

export const SwitchCursorPanel = (state, action) => {
  switch (action.type) {
    case "CURSOR_OVER":
      return action.payload;
    default:
      return state.switchCursorBump;
  }
};

export const SwitchHamburgerPanel = (state, action) => {
  switch (action.type) {
    case "HAMBURGER_STATUS":
      return action.payload;
    default:
      return state.switchHamburgerStatus;
  }
};

export const swichOnProjects = (state, action) => {
  switch (action.type) {
    case "ON_PROJECTS":
      return action.payload;
    default:
      return state.onProjects;
  }
};

export const switchToProjecs = (state, action) => {
  switch (action.type) {
    case "SCROLL_ON":
      return action.payload;
    default:
      return state.scrollToProjects;
  }
};
