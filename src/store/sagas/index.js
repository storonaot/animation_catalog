import { all } from 'redux-saga/effects'
import {
  watchFetchSerials,
  watchFetchSerial,
  watchUpdateSerial
} from './serials'
import watchFetchCountries from './countries'
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

    watchFetchCountries(),

    watchFetchDirectors(),
    watchCreateDirector(),
    watchRemoveDirector(),

    watchFetchStudios(),
    watchCreateStudios(),
    watchRemoveStudio()
  ])
}
