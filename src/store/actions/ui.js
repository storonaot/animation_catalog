import {
  TOGGLE_SIDEBAR,
  SHOW_DIALOG,
  CLOSE_DIALOG,
  SHOW_SNACKBAR,
  SHOW_HTTP_ERROR_DIALOG,
  CLOSE_HTTP_ERROR_DIALOG
} from 'constants/actions'

const toggleSidebar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR
  })
}

const showConfirmDialog = data => (dispatch) => {
  dispatch({
    type: SHOW_DIALOG,
    data
  })
}

const closeConfirmDialog = () => (dispatch) => {
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

const showHTTPErrorDialog = error => (dispatch) => {
  dispatch({
    type: SHOW_HTTP_ERROR_DIALOG,
    error
  })
}

const closeHTTPErrorDialog = () => (dispatch) => {
  dispatch({
    type: CLOSE_HTTP_ERROR_DIALOG
  })
}

export {
  toggleSidebar,
  showConfirmDialog,
  closeConfirmDialog,
  showSnackbar,
  showHTTPErrorDialog,
  closeHTTPErrorDialog
}
