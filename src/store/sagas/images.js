import { call, takeEvery } from 'redux-saga/effects'
import Api from 'api'

import { REMOVE_IMAGE, REMOVE_IMAGE_DONE } from 'constants/actions'

import handler from './helpers'

// **remove
function* callRemoveImage(action) {
  const imageId = action.payload
  const { response, error } = yield call(() => Api.removeImage(imageId))

  if (response && action.successCallback) {
    yield action.successCallback()
  }

  yield handler(response, error, REMOVE_IMAGE_DONE, 'Изображение удалено')
}

function* watchRemoveImage() {
  yield takeEvery(REMOVE_IMAGE, callRemoveImage)
}
// remove**

export default watchRemoveImage
