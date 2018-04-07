import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_LANGUAGES,
  FETCH_LANGUAGES_DONE,
  CREATE_LANGUAGE,
  CREATE_LANGUAGE_DONE,
  REMOVE_LANGUAGE,
  REMOVE_LANGUAGE_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all
function* callFetchLanguages() {
  const { response, error } = yield call(Api.fetchLanguages)
  yield handler(response, error, FETCH_LANGUAGES_DONE)
}

function* watchFetchLanguages(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_LANGUAGES, callFetchLanguages)
}
// fetch all**

// **create
function* callCreateLanguage(action) {
  const newLanguage = action.payload

  const { response, error } = yield call(() => Api.createLanguage(newLanguage))
  yield handler(response, error, CREATE_LANGUAGE_DONE, 'Язык создана')
}

function* watchCreateLanguage() {
  yield takeEvery(CREATE_LANGUAGE, callCreateLanguage)
}
// create**

// **remove
function* callRemoveLanguage(action) {
  const translationId = action.payload

  const { response, error } = yield call(() =>
    Api.removeLanguage(translationId)
  )
  yield handler(response, error, REMOVE_LANGUAGE_DONE, 'Язык удален')
}

function* watchRemoveLanguage() {
  yield takeEvery(REMOVE_LANGUAGE, callRemoveLanguage)
}
// remove**

export { watchFetchLanguages, watchCreateLanguage, watchRemoveLanguage }
