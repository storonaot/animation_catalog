import { put, call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_STUDIOS,
  FETCH_STUDIOS_DONE,
  CREATE_STUDIO,
  CREATE_STUDIO_DONE,
  REMOVE_STUDIO,
  REMOVE_STUDIO_DONE,
  SHOW_HTTP_ERROR_DIALOG,
  SHOW_SNACKBAR
} from 'constants/actions'

// import handler from './helpers'

// **fetch all
function* callFetchStudios() {
  // const result = yield call(Api.fetchStudios)
  // yield handler(result, FETCH_STUDIOS_DONE)

  const { response, error } = yield call(Api.fetchStudios)

  if (response) {
    yield put({ type: FETCH_STUDIOS_DONE, result: response.data })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchFetchStudios(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_STUDIOS, callFetchStudios)
}
// fetch all**

// **create
function* callCreateStudios(action) {
  // const newStudio = action.payload
  // const result = yield call(() => Api.createStudio(newStudio))
  // yield handler(result, CREATE_STUDIO_DONE, 'Студия создана')
  const newStudio = action.payload

  const { response, error } = yield call(() => Api.createStudio(newStudio))

  if (response) {
    yield put({ type: CREATE_STUDIO_DONE, result: response.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: 'Студия создана'
    })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchCreateStudios(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_STUDIO, callCreateStudios)
}
// create**

// **remove
function* callRemoveStudio(action) {
  // const studioId = action.payload

  // const result = yield call(() => Api.removeStudio(studioId))
  // yield handler(result, REMOVE_STUDIO_DONE, 'Студия удалена')
  const studioId = action.payload

  const { response, error } = yield call(() => Api.removeStudio(studioId))

  if (response) {
    yield put({ type: REMOVE_STUDIO_DONE, result: response.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: 'Студия удалена'
    })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchRemoveStudio() {
  yield takeEvery(REMOVE_STUDIO, callRemoveStudio)
}
// remove**

export { watchFetchStudios, watchCreateStudios, watchRemoveStudio }
