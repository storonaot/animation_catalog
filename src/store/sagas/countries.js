import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_DONE,
  CREATE_COUNTRY,
  CREATE_COUNTRY_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all
function* callFetchCountries() {
  const { response, error } = yield call(Api.fetchCountries)

  yield handler(response, error, FETCH_COUNTRIES_DONE)
}

function* watchFetchCountries(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_COUNTRIES, callFetchCountries)
}
// fetch all**

// **create
function* callCreateCountry(action) {
  const newCountry = action.payload

  const { response, error } = yield call(() => Api.createCountry(newCountry))
  yield handler(response, error, CREATE_COUNTRY_DONE, 'Страна создана')
}

function* watchCreateCountry() {
  yield takeEvery(CREATE_COUNTRY, callCreateCountry)
}
// create**

export { watchFetchCountries, watchCreateCountry }
