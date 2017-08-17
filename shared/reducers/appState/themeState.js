// -----------------------------------------------------------------------------
// PRIVATES

const defaultState = { sidebarIsOpen: false, debugMessage: 'initial message' };

// -----------------------------------------------------------------------------
// REDUCER

function theme(state = defaultState, action) {
  if (action.type === 'OPEN_SIDEBAR') {
    return {
      ...state,
      sidebarIsOpen: true,
      debugMessage: 'open the sidebar',
    };
  }

  if (action.type === 'CLOSE_SIDEBAR') {
    return {
      ...state,
      sidebarIsOpen: false,
      debugMessage: 'close the sidebar',
    };
  }

  return state;
}

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS
export function getAllAppState(state) {
  return state;
}

export function getSidebarState(state) {
  return state.sidebarIsOpen;
}

// -----------------------------------------------------------------------------
// EXPORTED REDUCER

export default theme;
