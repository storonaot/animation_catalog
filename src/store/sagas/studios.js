import { put, call, takeEvery, ForkEffect } from 'redux-saga/effects'
import Api from 'api'

import {
  FETCH_STUDIOS,
  FETCH_STUDIOS_DONE,
  CREATE_STUDIO,
  CREATE_STUDIO_DONE
} from 'constants/actions'

// **fetch all
function* callFetchStudios() {
  const result = yield call(Api.fetchStudios)

  if (result.status === 200) {
    yield put({ type: FETCH_STUDIOS_DONE, result: result.data })
  }
}

function* watchFetchStudios(): IterableIterator<ForkEffect> {
  yield takeEvery(FETCH_STUDIOS, callFetchStudios)
}
// fetch all**

// **create
function* callCreateStudios(action) {
  const newStudio = action.payload
  const result = yield call(() => Api.createStudio(newStudio))

  if (result.status === 200) {
    yield put({ type: CREATE_STUDIO_DONE, result: result.data })
  }
}

function* watchCreateStudios(): IterableIterator<ForkEffect> {
  yield takeEvery(CREATE_STUDIO, callCreateStudios)
}
// create**

export { watchFetchStudios, watchCreateStudios }
