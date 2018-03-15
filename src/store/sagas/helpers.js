import { put } from 'redux-saga/effects'
import { SHOW_HTTP_ERROR_DIALOG, SHOW_SNACKBAR } from 'constants/actions'

function* handler(response, error, TYPE, snackbarMsg) {
  if (response) {
    yield put({ type: TYPE, result: response.data })
    if (snackbarMsg) {
      yield put({
        type: SHOW_SNACKBAR,
        message: snackbarMsg
      })
    }
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error })
  }
}

export default handler
