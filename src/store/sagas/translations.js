import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_TRANSLATIONS,
  FETCH_TRANSLATIONS_DONE,
  CREATE_TRANSLATION,
  CREATE_TRANSLATION_DONE,
  REMOVE_TRANSLATION,
  REMOVE_TRANSLATION_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all
function* callFetchTranslations() {
  const { response, error } = yield call(Api.fetchTranslations)
  yield handler(response, error, FETCH_TRANSLATIONS_DONE)
}

function* watchFetchTranslations(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_TRANSLATIONS, callFetchTranslations)
}
// fetch all**

// **create
function* callCreateTranslation(action) {
  const newTranslation = action.payload

  const { response, error } = yield call(() =>
    Api.createTranslation(newTranslation)
  )
  yield handler(response, error, CREATE_TRANSLATION_DONE, 'Озвучка создана')
}

function* watchCreateTranslation() {
  yield takeEvery(CREATE_TRANSLATION, callCreateTranslation)
}
// create**

// **remove
function* callRemoveTranslation(action) {
  const translationId = action.payload

  const { response, error } = yield call(() =>
    Api.removeTranslation(translationId)
  )
  yield handler(response, error, REMOVE_TRANSLATION_DONE, 'Озвучка удалена')
}

function* watchRemoveTranslation() {
  yield takeEvery(REMOVE_TRANSLATION, callRemoveTranslation)
}
// remove**

export {
  watchFetchTranslations,
  watchCreateTranslation,
  watchRemoveTranslation
}
