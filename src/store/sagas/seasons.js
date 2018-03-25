import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  CREATE_SEASON,
  CREATE_SEASON_DONE,
  FETCH_SEASONS,
  FETCH_SEASONS_DONE,
  UPDATE_SEASON,
  UPDATE_SEASON_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all by serial
function* callFetchSeasons(action) {
  const { serialId } = action
  const { response, error } = yield call(() => Api.fetchSeasons(serialId))
  yield handler(response, error, FETCH_SEASONS_DONE)
}

function* watchFetchSeasons() {
  yield takeEvery(FETCH_SEASONS, callFetchSeasons)
}

// fetch all by serial**

// **create
function* callCreateSeason(action) {
  const newSeason = action.payload

  const { response, error } = yield call(() => Api.createSeason(newSeason))
  yield handler(response, error, CREATE_SEASON_DONE, 'Сезон создан')
}

function* watchCreateSeason(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_SEASON, callCreateSeason)
}
// create**

// **update
function* callUpdateSeason(action) {
  const { payload, id } = action
  const { response, error } = yield call(() => Api.updateSeason(id, payload))
  yield handler(response, error, UPDATE_SEASON_DONE, 'Сезон обновлен')
}

function* watchUpdateSeason() {
  yield takeEvery(UPDATE_SEASON, callUpdateSeason)
}
// update**

export { watchCreateSeason, watchFetchSeasons, watchUpdateSeason }

// export { watchFetchDirectors, watchCreateDirector, watchRemoveDirector }
