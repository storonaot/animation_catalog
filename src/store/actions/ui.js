import {
  TOGGLE_SIDEBAR,
  SHOW_DIALOG,
  CLOSE_DIALOG,
  SHOW_SNACKBAR
} from 'constants/actions'

const toggleSidebar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR
  })
}

const showDialog = data => (dispatch) => {
  dispatch({
    type: SHOW_DIALOG,
    data
  })
}

const closeDialog = () => (dispatch) => {
  dispatch({
    type: CLOSE_DIALOG
  })
}

const showSnackbar = message => (dispatch) => {
  dispatch({
    type: SHOW_SNACKBAR,
    message
  })
}

export { toggleSidebar, showDialog, closeDialog, showSnackbar }
