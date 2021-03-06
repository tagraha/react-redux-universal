import { combineReducers } from 'redux';
import posts, * as FromPosts from './posts';
import theme, * as FromTheme from './appState';

// -----------------------------------------------------------------------------
// REDUCER

const rootReducer = combineReducers({
  posts,
  theme,
});

// -----------------------------------------------------------------------------
// EXPORTED SELECTORS

export function getPostById(state, id) {
  return FromPosts.getById(state.posts, id);
}

export function getAllAppState(state) {
  return FromTheme.getAllAppState(state.theme);
}

export function getSidebarState(state) {
  return FromTheme.getSidebarState(state.theme);
}

// -----------------------------------------------------------------------------
// REDUCER EXPORT

export default rootReducer;
