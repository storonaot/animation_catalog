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
  SHOW_HTTP_ERROR_DIALOG,
  SHOW_SNACKBAR
} from 'constants/actions'

// import handler from './helpers'

// **fetch all
function* callFetchSerials() {
  // yield put({ type: SHOW_PRELOADER })
  // const result = yield call(Api.fetchSerials)
  // yield handler(result, FETCH_SERIALS_DONE)
  // yield put({ type: HIDE_PRELOADER })

  yield put({ type: SHOW_PRELOADER })

  const { response, error } = yield call(Api.fetchSerials)

  if (response) {
    yield put({ type: FETCH_SERIALS_DONE, result: response.data })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
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
  // yield put({ type: SHOW_PRELOADER })
  // const result = yield call(() => Api.fetchSerial(action.id))
  // yield handler(result, FETCH_SERIAL_DONE)
  // yield put({ type: HIDE_PRELOADER })
  yield put({ type: SHOW_PRELOADER })

  const serialId = action.id

  const { response, error } = yield call(() => Api.fetchSerial(serialId))

  if (response) {
    yield put({ type: FETCH_SERIAL_DONE, result: response.data })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
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
  // const { payload, id } = action
  // const result = yield call(() => Api.updateSerial(id, payload))
  // yield handler(result, UPDATE_SERIAL_DONE, 'Данные обновлены')
  const { payload, id } = action

  const { response, error } = yield call(() => Api.updateSerial(id, payload))

  if (response) {
    yield put({ type: UPDATE_SERIAL_DONE, result: response.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: 'Данные обновлены'
    })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchUpdateSerial(): IterableIterator<ForkEffect> {
  yield takeEvery(UPDATE_SERIAL, callUpdateSerial)
}
// update**

// ** create
function* callCreateSerial(action) {
  // const newSerial = action.payload
  // const result = yield call(() => Api.createSerial(newSerial))
  // yield handler(result, CREATE_SERIAL_DONE, `${result.data.name} создан`)
  const newSerial = action.payload

  const { response, error } = yield call(() => Api.createSerial(newSerial))

  if (response) {
    yield put({ type: CREATE_SERIAL_DONE, result: response.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: `${response.data.name} создан`
    })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchCreateSerial() {
  yield takeEvery(CREATE_SERIAL, callCreateSerial)
}
// create**

export {
  watchFetchSerials,
  watchFetchSerial,
  watchUpdateSerial,
  watchCreateSerial
}
