import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_FILM,
  FETCH_FILM_DONE,
  FETCH_FILMS,
  FETCH_FILMS_DONE,
  CREATE_FILM,
  CREATE_FILM_DONE,
  UPDATE_FILM,
  UPDATE_FILM_DONE,
  REMOVE_FILM,
  REMOVE_FILM_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all
function* callFetchFilms(action) {
  const { seasonId } = action
  const { response, error } = yield call(() => Api.fetchFilms(seasonId))
  yield handler(response, error, FETCH_FILMS_DONE)
}

function* watchFetchFilms() {
  yield takeEvery(FETCH_FILMS, callFetchFilms)
}
// fetch all**

// **fetch one
function* callFetchFilm(action) {
  const filmId = action.id
  const { response, error } = yield call(() => Api.fetchFilm(filmId))
  yield handler(response, error, FETCH_FILM_DONE)
}

function* watchFetchFilm() {
  yield takeEvery(FETCH_FILM, callFetchFilm)
}
// **fetch one

// **create
function* callCreateFilm(action) {
  const newFilm = action.payload

  const { response, error } = yield call(() => Api.createFilm(newFilm))
  yield handler(response, error, CREATE_FILM_DONE, 'Эпизод создан')
}

function* watchCreateFilm(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_FILM, callCreateFilm)
}
// create**

// **update
function* callUpdateFilm(action) {
  const { payload, id } = action
  const { response, error } = yield call(() => Api.updateFilm(id, payload))
  yield handler(response, error, UPDATE_FILM_DONE, 'Эпизод обновлен')
}

function* watchUpdateFilm() {
  yield takeEvery(UPDATE_FILM, callUpdateFilm)
}
// update**

// **delete
function* callRemoveFilm(action) {
  const episodeId = action.id
  const { response, error } = yield call(() => Api.removeFilm(episodeId))
  yield handler(response, error, REMOVE_FILM_DONE, 'Cезон удален')
}

function* watchRemoveFilm() {
  yield takeEvery(REMOVE_FILM, callRemoveFilm)
}
// delete**

export { watchFetchFilms, watchFetchFilm, watchCreateFilm, watchUpdateFilm, watchRemoveFilm }
