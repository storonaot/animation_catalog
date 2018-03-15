import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_STUDIOS,
  FETCH_STUDIOS_DONE,
  CREATE_STUDIO,
  CREATE_STUDIO_DONE,
  REMOVE_STUDIO,
  REMOVE_STUDIO_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all
function* callFetchStudios() {
  const { response, error } = yield call(Api.fetchStudios)

  yield handler(response, error, FETCH_STUDIOS_DONE)
}

function* watchFetchStudios(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_STUDIOS, callFetchStudios)
}
// fetch all**

// **create
function* callCreateStudios(action) {
  const newStudio = action.payload

  const { response, error } = yield call(() => Api.createStudio(newStudio))
  yield handler(response, error, CREATE_STUDIO_DONE, 'Студия создана')
}

function* watchCreateStudios(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_STUDIO, callCreateStudios)
}
// create**

// **remove
function* callRemoveStudio(action) {
  const studioId = action.payload

  const { response, error } = yield call(() => Api.removeStudio(studioId))
  yield handler(response, error, REMOVE_STUDIO_DONE, 'Студия удалена')
}

function* watchRemoveStudio() {
  yield takeEvery(REMOVE_STUDIO, callRemoveStudio)
}
// remove**

export { watchFetchStudios, watchCreateStudios, watchRemoveStudio }
