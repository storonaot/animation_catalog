import {
  TOGGLE_SIDEBAR,
  SHOW_PRELOADER,
  HIDE_PRELOADER
} from 'constants/actions'

const defaultState = {
  sidebarOpened: false,
  loggedIn: false,
  dataLoading: true
}

export default function user(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarOpened: !state.sidebarOpened }
    case SHOW_PRELOADER:
      return { ...state, dataLoading: true }
    case HIDE_PRELOADER:
      return { ...state, dataLoading: false }
    default:
      return state
  }
}
