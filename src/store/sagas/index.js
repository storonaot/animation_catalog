import { all } from 'redux-saga/effects'
import {
  watchFetchSerials,
  watchFetchSerial,
  watchUpdateSerial,
  watchCreateSerial,
  watchRemoveSerial
} from './serials'
import { watchFetchCountries, watchCreateCountry } from './countries'
import {
  watchFetchDirectors,
  watchCreateDirector,
  watchRemoveDirector
} from './directors'
import {
  watchFetchStudios,
  watchCreateStudios,
  watchRemoveStudio
} from './studios'
import {
  watchCreateSeason,
  watchFetchSeasons,
  watchUpdateSeason,
  watchRemoveSeason,
  watchFetchSeason
} from './seasons'
import {
  watchFetchEpisodes,
  watchFetchEpisode,
  watchCreateEpisode,
  watchUpdateEpisode,
  watchRemoveEpisode
} from './episodes'

export function* helloSaga() {
  yield console.log('Hello Sagas!')
}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),

    watchFetchSerials(),
    watchFetchSerial(),
    watchUpdateSerial(),
    watchCreateSerial(),
    watchRemoveSerial(),

    watchFetchCountries(),
    watchCreateCountry(),

    watchFetchDirectors(),
    watchCreateDirector(),
    watchRemoveDirector(),

    watchFetchStudios(),
    watchCreateStudios(),
    watchRemoveStudio(),

    watchFetchSeasons(),
    watchFetchSeason(),
    watchCreateSeason(),
    watchUpdateSeason(),
    watchRemoveSeason(),

    watchFetchEpisodes(),
    watchFetchEpisode(),
    watchCreateEpisode(),
    watchUpdateEpisode(),
    watchRemoveEpisode()
  ])
}
