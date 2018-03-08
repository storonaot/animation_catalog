import { put, call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import { FETCH_COUNTRIES, FETCH_COUNTRIES_DONE } from 'constants/actions'

function* callFetchCountries() {
  const result = yield call(Api.fetchCountries)

  if (result.status === 200) {
    yield put({ type: FETCH_COUNTRIES_DONE, result: result.data })
  }
}

function* watchFetchCountries(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_COUNTRIES, callFetchCountries)
}

export default watchFetchCountries
