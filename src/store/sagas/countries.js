import { put, call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_DONE,
  CREATE_COUNTRY,
  CREATE_COUNTRY_DONE,
  SHOW_HTTP_ERROR_DIALOG,
  SHOW_SNACKBAR
} from 'constants/actions'

// import handler from './helpers'

// **fetch all
function* callFetchCountries() {
  // const result = yield call(Api.fetchCountries)
  // yield handler(result, FETCH_COUNTRIES_DONE)
  const { response, error } = yield call(Api.fetchCountries)
  if (response) {
    yield put({ type: FETCH_COUNTRIES_DONE, result: response.data })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchFetchCountries(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_COUNTRIES, callFetchCountries)
}
// fetch all**

// **create
function* callCreateCountry(action) {
  // const newCountry = action.payload
  // const result = yield call(() => Api.createCountry(newCountry))
  // yield handler(result, CREATE_COUNTRY_DONE, 'Страна создана')

  const newCountry = action.payload

  const { response, error } = yield call(() => Api.createCountry(newCountry))

  if (response) {
    yield put({ type: CREATE_COUNTRY_DONE, result: response.data })
    yield put({
      type: SHOW_SNACKBAR,
      message: 'Страна создана'
    })
  } else {
    yield put({ type: SHOW_HTTP_ERROR_DIALOG, error: error.response.data })
  }
}

function* watchCreateCountry() {
  yield takeEvery(CREATE_COUNTRY, callCreateCountry)
}
// create**

export { watchFetchCountries, watchCreateCountry }
