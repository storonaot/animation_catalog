import {
  TOGGLE_SIDEBAR,
  SHOW_PRELOADER,
  HIDE_PRELOADER,
  SHOW_DIALOG,
  CLOSE_DIALOG,
  SHOW_SNACKBAR,
  SHOW_HTTP_ERROR_DIALOG,
  CLOSE_HTTP_ERROR_DIALOG
} from 'constants/actions'

const defaultState = {
  sidebarOpened: false,
  loggedIn: false,
  dataLoading: false,
  dialog: {
    showed: false,
    message: null,
    title: null,
    onSuccess: () => {}
  },
  snackbar: {
    showed: false,
    message: 'Я снээээээк'
  },
  HTTPErrorDialog: {
    showed: false,
    code: 'Что-то пошло не так',
    title: 'HTTPErrorPopup'
  }
}

export default function ui(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { ...state, sidebarOpened: !state.sidebarOpened }
    case SHOW_PRELOADER:
      return { ...state, dataLoading: true }
    case HIDE_PRELOADER:
      return { ...state, dataLoading: false }
    case SHOW_DIALOG: {
      const newDialog = {
        ...action.data,
        showed: true
      }
      return { ...state, dialog: newDialog }
    }
    case CLOSE_DIALOG:
      return { ...state, dialog: { showed: false } }
    case SHOW_SNACKBAR:
      return { ...state, snackbar: { showed: true, message: action.message } }
    case SHOW_HTTP_ERROR_DIALOG: {
      return {
        ...state,
        HTTPErrorDialog: { ...defaultState.HTTPErrorDialog, showed: true }
      }
    }

    case CLOSE_HTTP_ERROR_DIALOG:
      return { ...state, HTTPErrorDialog: defaultState.HTTPErrorDialog }
    default:
      return state
  }
}
