import { put, call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_DONE,
  CREATE_COUNTRY,
  CREATE_COUNTRY_DONE,
  SHOW_SNACKBAR
} from 'constants/actions'

// **fetch all
function* callFetchCountries() {
  const result = yield call(Api.fetchCountries)

  if (result.status === 200) {
    yield put({ type: FETCH_COUNTRIES_DONE, result: result.data })
  }
}

function* watchFetchCountries(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_COUNTRIES, callFetchCountries)
}
// fetch all**

// **create

function* callCreateCountry(action) {
  const newCountry = action.payload
  const result = yield call(() => Api.createCountry(newCountry))

  if (result.status === 200) {
    yield put({ type: CREATE_COUNTRY_DONE, result: result.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: `${result.data.name} создана`
    })
  }
}

function* watchCreateCountry() {
  yield takeEvery(CREATE_COUNTRY, callCreateCountry)
}
// create**

export { watchFetchCountries, watchCreateCountry }
