// @flow
import {
  put,
  call,
  takeEvery,
  ForkEffect,
  PutEffect,
  CallEffect,
  IterableIterator
} from 'redux-saga/effects'
import Api from 'api'
import {
  FETCH_SERIALS,
  FETCH_SERIALS_DONE,
  FETCH_SERIAL,
  FETCH_SERIAL_DONE,
  UPDATE_SERIAL,
  UPDATE_SERIAL_DONE,
  HIDE_PRELOADER,
  SHOW_PRELOADER,
  CREATE_SERIAL_DONE,
  CREATE_SERIAL,
  REMOVE_SERIAL,
  REMOVE_SERIAL_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all
function* callFetchSerials() {
  yield put({ type: SHOW_PRELOADER })

  const { response, error } = yield call(Api.fetchSerials)

  yield handler(response, error, FETCH_SERIALS_DONE)
  yield put({ type: HIDE_PRELOADER })
}

function* watchFetchSerials(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_SERIALS, callFetchSerials)
}
// fetch all**

// **fetch one
function* callFetchSerial(
  action: Object
): IterableIterator<PutEffect<any> | CallEffect> {
  yield put({ type: SHOW_PRELOADER })

  const serialId = action.id

  const { response, error } = yield call(() => Api.fetchSerial(serialId))
  yield handler(response, error, FETCH_SERIAL_DONE)
  yield put({ type: HIDE_PRELOADER })
}

function* watchFetchSerial(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_SERIAL, callFetchSerial)
}
// **fetch one

// **update
function* callUpdateSerial(
  action: Object
): IterableIterator<PutEffect<any> | CallEffect> {
  const { payload, id } = action
  const { response, error } = yield call(() => Api.updateSerial(id, payload))

  yield handler(response, error, UPDATE_SERIAL_DONE, 'Данные обновлены')
}

function* watchUpdateSerial(): IterableIterator<ForkEffect> {
  yield takeEvery(UPDATE_SERIAL, callUpdateSerial)
}
// update**

// ** create
function* callCreateSerial(action) {
  const newSerial = action.payload

  const { response, error } = yield call(() => Api.createSerial(newSerial))
  yield handler(response, error, CREATE_SERIAL_DONE, 'Сериал создан')
}

function* watchCreateSerial(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_SERIAL, callCreateSerial)
}
// create**

// **delete
function* callRemoveSerial(action) {
  const serialId = action.id
  const { response, error } = yield call(() => Api.removeSerial(serialId))
  yield handler(response, error, REMOVE_SERIAL_DONE, 'Сериал удален')
}

function* watchRemoveSerial(): IterableIterator<ForkEffect> {
  yield takeEvery(REMOVE_SERIAL, callRemoveSerial)
}
// delete**

export {
  watchFetchSerials,
  watchFetchSerial,
  watchUpdateSerial,
  watchCreateSerial,
  watchRemoveSerial
}
