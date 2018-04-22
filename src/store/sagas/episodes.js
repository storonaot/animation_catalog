import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_EPISODES,
  FETCH_EPISODES_DONE,
  FETCH_EPISODE,
  FETCH_EPISODE_DONE,
  CREATE_EPISODE,
  CREATE_EPISODE_DONE,
  UPDATE_EPISODE,
  UPDATE_EPISODE_DONE,
  REMOVE_EPISODE,
  REMOVE_EPISODE_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all by season
function* callFetchEpisodes(action) {
  const { seasonId } = action
  const { response, error } = yield call(() => Api.fetchEpisodes(seasonId))
  yield handler(response, error, FETCH_EPISODES_DONE)
}

function* watchFetchEpisodes() {
  yield takeEvery(FETCH_EPISODES, callFetchEpisodes)
}
// fetch all by season**

// **fetch one
function* callFetchEpisode(action) {
  const seasonId = action.id
  const { response, error } = yield call(() => Api.fetchEpisode(seasonId))
  yield handler(response, error, FETCH_EPISODE_DONE)
}

function* watchFetchEpisode() {
  yield takeEvery(FETCH_EPISODE, callFetchEpisode)
}
// **fetch one

// **create
function* callCreateEpisode(action) {
  const newEpisode = action.payload

  const { response, error } = yield call(() => Api.createEpisode(newEpisode))
  yield handler(response, error, CREATE_EPISODE_DONE, 'Эпизод создан')
}

function* watchCreateEpisode(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_EPISODE, callCreateEpisode)
}
// create**

// **update
function* callUpdateEpisode(action) {
  const { payload, id } = action
  const { response, error } = yield call(() => Api.updateEpisode(id, payload))
  yield handler(response, error, UPDATE_EPISODE_DONE, 'Эпизод обновлен')
}

function* watchUpdateEpisode() {
  yield takeEvery(UPDATE_EPISODE, callUpdateEpisode)
}
// update**

// **delete
function* callRemoveEpisode(action) {
  const episodeId = action.id
  const { response, error } = yield call(() => Api.removeEpisode(episodeId))
  yield handler(response, error, REMOVE_EPISODE_DONE, 'Cезон удален')
}

function* watchRemoveEpisode() {
  yield takeEvery(REMOVE_EPISODE, callRemoveEpisode)
}
// delete**

export {
  watchFetchEpisodes,
  watchFetchEpisode,
  watchCreateEpisode,
  watchUpdateEpisode,
  watchRemoveEpisode
}
