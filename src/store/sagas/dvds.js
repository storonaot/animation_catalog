import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_DVDS,
  FETCH_DVDS_DONE,
  FETCH_DVD,
  FETCH_DVD_DONE,
  CREATE_DVD,
  CREATE_DVD_DONE,
  UPDATE_DVD,
  UPDATE_DVD_DONE,
  REMOVE_DVD,
  REMOVE_DVD_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all
function* callFetchDvds() {
  const { response, error } = yield call(() => Api.fetchDvds())
  yield handler(response, error, FETCH_DVDS_DONE)
}

function* watchFetchDvds() {
  yield takeEvery(FETCH_DVDS, callFetchDvds)
}
// fetch all**

// **fetch one
function* callFetchDvd(action) {
  const dvdId = action.id
  const { response, error } = yield call(() => Api.fetchDvd(dvdId))
  yield handler(response, error, FETCH_DVD_DONE)
}

function* watchFetchDvd() {
  yield takeEvery(FETCH_DVD, callFetchDvd)
}
// **fetch one

// **create
function* callCreateDvd(action) {
  const newDvd = action.payload

  const { response, error } = yield call(() => Api.createDvd(newDvd))
  yield handler(response, error, CREATE_DVD_DONE, 'Эпизод создан')
}

function* watchCreateDvd(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_DVD, callCreateDvd)
}
// create**

// **update
function* callUpdateDvd(action) {
  const { payload, id } = action
  const { response, error } = yield call(() => Api.updateDvd(id, payload))
  yield handler(response, error, UPDATE_DVD_DONE, 'Эпизод обновлен')
}

function* watchUpdateDvd() {
  yield takeEvery(UPDATE_DVD, callUpdateDvd)
}
// update**

// **delete
function* callRemoveDvd(action) {
  const episodeId = action.id
  const { response, error } = yield call(() => Api.removeDvd(episodeId))
  yield handler(response, error, REMOVE_DVD_DONE, 'Cезон удален')
}

function* watchRemoveDvd() {
  yield takeEvery(REMOVE_DVD, callRemoveDvd)
}
// delete**

export { watchFetchDvds, watchFetchDvd, watchCreateDvd, watchUpdateDvd, watchRemoveDvd }
