import { put, call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_DIRECTORS,
  FETCH_DIRECTORS_DONE,
  CREATE_DIRECTOR,
  CREATE_DIRECTOR_DONE,
  REMOVE_DIRECTOR,
  REMOVE_DIRECTOR_DONE,
  SHOW_HTTP_ERROR_DIALOG,
  SHOW_SNACKBAR
} from 'constants/actions'

// import handler from './helpers'

// **fetch all
function* callFetchDirectors() {
  // const result = yield call(Api.fetchDirectors)
  // yield handler(result, FETCH_DIRECTORS_DONE)
  const { response, error } = yield call(Api.fetchDirectors)

  if (response) {
    yield put({ type: FETCH_DIRECTORS_DONE, result: response.data })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchFetchDirectors(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_DIRECTORS, callFetchDirectors)
}
// fetch all**

// **create
function* callCreateDirector(action) {
  // const newDirector = action.payload
  // const result = yield call(() => Api.createDirector(newDirector))

  // yield handler(result, CREATE_DIRECTOR_DONE, 'Режиссер создан')
  const newDirector = action.payload

  const { response, error } = yield call(() => Api.createDirector(newDirector))

  if (response) {
    yield put({ type: CREATE_DIRECTOR_DONE, result: response.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: 'Режиссер создан'
    })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchCreateDirector(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_DIRECTOR, callCreateDirector)
}
// create**

// **remove
function* callRemoveDirector(action) {
  // const directorId = action.payload
  // const result = yield call(() => Api.removeDirector(directorId))
  // yield handler(result, REMOVE_DIRECTOR_DONE, 'Режиссер удален')
  const directorId = action.payload

  const { response, error } = yield call(() => Api.removeDirector(directorId))

  if (response) {
    yield put({ type: REMOVE_DIRECTOR_DONE, result: response.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: 'Режиссер удален'
    })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchRemoveDirector() {
  yield takeEvery(REMOVE_DIRECTOR, callRemoveDirector)
}
// remove**

export { watchFetchDirectors, watchCreateDirector, watchRemoveDirector }
