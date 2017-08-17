import { combineReducers } from 'redux';

import theme, * as FromThemeState from './themeState';

// -----------------------------------------------------------------------------
// REDUCER

const themeSkeleton = combineReducers({
  theme,
});

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS
export function getAllAppState(state) {
  return FromThemeState.getAllAppState(state);
}

export function getSidebarState(state) {
  return FromThemeState.getSidebarState(state);
}

// -----------------------------------------------------------------------------
// REDUCER EXPORT

export default themeSkeleton;
