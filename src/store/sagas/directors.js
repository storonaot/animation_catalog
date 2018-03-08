import { put, call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_DIRECTORS,
  FETCH_DIRECTORS_DONE,
  CREATE_DIRECTOR,
  CREATE_DIRECTOR_DONE,
  REMOVE_DIRECTOR,
  REMOVE_DIRECTOR_DONE
} from 'constants/actions'

// **fetch all
function* callFetchDirectors() {
  const result = yield call(Api.fetchDirectors)

  if (result.status === 200) {
    yield put({ type: FETCH_DIRECTORS_DONE, result: result.data })
  }
}

function* watchFetchDirectors(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_DIRECTORS, callFetchDirectors)
}
// fetch all**

// **create
function* callCreateDirector(action) {
  const newDirector = action.payload
  const result = yield call(() => Api.createDirector(newDirector))
  if (result.status === 200) {
    yield put({ type: CREATE_DIRECTOR_DONE, result: result.data })
  }
}

function* watchCreateDirector(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_DIRECTOR, callCreateDirector)
}
// create**

// **remove
function* callRemoveDirector(action) {
  const directorId = action.payload

  const result = yield call(() => Api.removeDirector(directorId))
  if (result.status === 200) {
    yield put({ type: REMOVE_DIRECTOR_DONE, result: result.data })
  }
}

function* watchRemoveDirector() {
  yield takeEvery(REMOVE_DIRECTOR, callRemoveDirector)
}
// remove**

export { watchFetchDirectors, watchCreateDirector, watchRemoveDirector }
