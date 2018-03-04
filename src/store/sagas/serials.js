// @flow
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
  HIDE_PRELOADER
} from 'constants/actions'

function* callFetchSerials() {
  const result = yield call(Api.fetchSerials)
  if (result.status === 200) {
    yield put({ type: FETCH_SERIALS_DONE, result: result.data })
  }
  yield put({ type: HIDE_PRELOADER })
}

function* watchFetchSerials(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_SERIALS, callFetchSerials)
}

function* callFetchSerial(
  action: Object
): IterableIterator<PutEffect<any> | CallEffect> {
  const result = yield call(() => Api.fetchSerial(action.id))
  if (result.status === 200) {
    yield put({ type: FETCH_SERIAL_DONE, result: result.data })
  }
  yield put({ type: HIDE_PRELOADER })
}

function* watchFetchSerial() {
  yield takeEvery(FETCH_SERIAL, callFetchSerial)
}

export { watchFetchSerials, watchFetchSerial }
