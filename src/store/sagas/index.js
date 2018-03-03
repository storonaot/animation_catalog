import { put, all, call, takeEvery } from 'redux-saga/effects'
import {
  FETCH_SERIALS,
  FETCH_SERIALS_DONE,
  HIDE_PRELOADER
} from 'constants/actions'

import axios from 'axios'

export function* helloSaga() {
  yield console.log('Hello Sagas!')
}

function getSerials() {
  const url = 'http://localhost:3000/api/v1/serials'
  return axios.get(url).then(response => response)
}

function* callGetSerials() {
  const result = yield call(getSerials)
  if (result.status === 200) {
    yield put({ type: FETCH_SERIALS_DONE, result: result.data })
  }
  yield put({ type: HIDE_PRELOADER })
}

function* watchGetSerials() {
  yield takeEvery(FETCH_SERIALS, callGetSerials)
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([helloSaga(), watchGetSerials()])
}
