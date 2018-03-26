import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  CREATE_SEASON,
  CREATE_SEASON_DONE,
  FETCH_SEASONS,
  FETCH_SEASONS_DONE,
  FETCH_SEASON,
  FETCH_SEASON_DONE,
  UPDATE_SEASON,
  UPDATE_SEASON_DONE,
  REMOVE_SEASON,
  REMOVE_SEASON_DONE
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

// **fetch one
function* callFetchSeason(action) {
  const seasonId = action.id
  const { response, error } = yield call(() => Api.fetchSeason(seasonId))
  yield handler(response, error, FETCH_SEASON_DONE)
}

function* watchFetchSeason() {
  yield takeEvery(FETCH_SEASON, callFetchSeason)
}
// **fetch one

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

// **delete
function* callRemoveSeason(action) {
  const seasonId = action.id
  const { response, error } = yield call(() => Api.removeSeason(seasonId))
  yield handler(response, error, REMOVE_SEASON_DONE, 'Cезон удален')
}

function* watchRemoveSeason() {
  yield takeEvery(REMOVE_SEASON, callRemoveSeason)
}
// delete**

export {
  watchCreateSeason,
  watchFetchSeasons,
  watchUpdateSeason,
  watchRemoveSeason,
  watchFetchSeason
}
