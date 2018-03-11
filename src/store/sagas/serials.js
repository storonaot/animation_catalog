import {
  put,
  call,
  takeEvery,
  ForkEffect,
  PutEffect,
  CallEffect
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
  SHOW_SNACKBAR,
  CREATE_SERIAL_DONE,
  CREATE_SERIAL
} from 'constants/actions'

// **fetch all
function* callFetchSerials() {
  yield put({ type: SHOW_PRELOADER })
  const result = yield call(Api.fetchSerials)
  if (result.status === 200) {
    yield put({ type: FETCH_SERIALS_DONE, result: result.data })
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
  yield put({ type: SHOW_PRELOADER })
  const result = yield call(() => Api.fetchSerial(action.id))
  if (result.status === 200) {
    yield put({ type: FETCH_SERIAL_DONE, result: result.data })
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
  const { payload, id } = action
  const result = yield call(() => Api.updateSerial(id, payload))
  if (result.status === 200) {
    yield put({ type: UPDATE_SERIAL_DONE, result: result.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: 'Данные обновлены'
    })
  }
}

function* watchUpdateSerial(): IterableIterator<ForkEffect> {
  yield takeEvery(UPDATE_SERIAL, callUpdateSerial)
}
// update**

// ** create
function* callCreateSerial(action) {
  const newSerial = action.payload
  const result = yield call(() => Api.createSerial(newSerial))
  if (result.status === 200) {
    yield put({ type: CREATE_SERIAL_DONE, result: result.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: `${result.data.name} создан`
    })
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
