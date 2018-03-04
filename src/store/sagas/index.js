import { put, all, call, takeEvery } from 'redux-saga/effects'
import Api from 'api'
import {
  FETCH_SERIALS,
  FETCH_SERIALS_DONE,
  HIDE_PRELOADER
} from 'constants/actions'

export function* helloSaga() {
  yield console.log('Hello Sagas!')
}

function* callFetchSerials() {
  const result = yield call(Api.fetchSerials)
  if (result.status === 200) {
    yield put({ type: FETCH_SERIALS_DONE, result: result.data })
  }
  yield put({ type: HIDE_PRELOADER })
}

function* watchFetchSerials() {
  yield takeEvery(FETCH_SERIALS, callFetchSerials)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchFetchSerials()])
}
