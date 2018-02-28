import { TOGGLE_SIDEBAR } from 'constants/action'

const defaultState = {
  sidebarOpened: false,
  loggedIn: false
}

export default function user(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarOpened: !state.sidebarOpened }
    default:
      return state
  }
}
