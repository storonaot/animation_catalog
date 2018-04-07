import { call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_VIDEOFORMATS,
  FETCH_VIDEOFORMATS_DONE,
  CREATE_VIDEOFORMAT,
  CREATE_VIDEOFORMAT_DONE,
  REMOVE_VIDEOFORMAT,
  REMOVE_VIDEOFORMAT_DONE
} from 'constants/actions'

import handler from './helpers'

// **fetch all
function* callFetchVideoformats() {
  const { response, error } = yield call(Api.fetchVideoformats)
  yield handler(response, error, FETCH_VIDEOFORMATS_DONE)
}

function* watchFetchVideoformats(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_VIDEOFORMATS, callFetchVideoformats)
}
// fetch all**

// **create
function* callCreateVideoformat(action) {
  const newVideoformat = action.payload

  const { response, error } = yield call(() =>
    Api.createVideoformat(newVideoformat)
  )
  yield handler(response, error, CREATE_VIDEOFORMAT_DONE, 'Озвучка создана')
}

function* watchCreateVideoformat() {
  yield takeEvery(CREATE_VIDEOFORMAT, callCreateVideoformat)
}
// create**

// **remove
function* callRemoveVideoformat(action) {
  const translationId = action.payload

  const { response, error } = yield call(() =>
    Api.removeVideoformat(translationId)
  )
  yield handler(response, error, REMOVE_VIDEOFORMAT_DONE, 'Озвучка удалена')
}

function* watchRemoveVideoformat() {
  yield takeEvery(REMOVE_VIDEOFORMAT, callRemoveVideoformat)
}
// remove**

export {
  watchFetchVideoformats,
  watchCreateVideoformat,
  watchRemoveVideoformat
}
