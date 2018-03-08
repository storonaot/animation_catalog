import { put, call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import { FETCH_STUDIOS, FETCH_STUDIOS_DONE } from 'constants/actions'

function* callFetchStudios() {
  const result = yield call(Api.fetchStudios)

  if (result.status === 200) {
    yield put({ type: FETCH_STUDIOS_DONE, result: result.data })
  }
}

function* watchFetchStudios(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_STUDIOS, callFetchStudios)
}

export default watchFetchStudios
