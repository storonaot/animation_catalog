import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_DIRECTORS,
  FETCH_DIRECTORS_DONE,
  CREATE_DIRECTOR,
  CREATE_DIRECTOR_DONE,
  REMOVE_DIRECTOR,
  REMOVE_DIRECTOR_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all
function* callFetchDirectors() {
  const { response, error } = yield call(Api.fetchDirectors)
  yield handler(response, error, FETCH_DIRECTORS_DONE)
}

function* watchFetchDirectors(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_DIRECTORS, callFetchDirectors)
}
// fetch all**

// **create
function* callCreateDirector(action) {
  const newDirector = action.payload

  const { response, error } = yield call(() => Api.createDirector(newDirector))
  yield handler(response, error, CREATE_DIRECTOR_DONE, 'Режиссер создан')
}

function* watchCreateDirector(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_DIRECTOR, callCreateDirector)
}
// create**

// **remove
function* callRemoveDirector(action) {
  const directorId = action.payload

  const { response, error } = yield call(() => Api.removeDirector(directorId))
  yield handler(response, error, REMOVE_DIRECTOR_DONE, 'Режиссер удален')
}

function* watchRemoveDirector() {
  yield takeEvery(REMOVE_DIRECTOR, callRemoveDirector)
}
// remove**

export { watchFetchDirectors, watchCreateDirector, watchRemoveDirector }
