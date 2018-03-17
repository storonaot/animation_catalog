import { REMOVE_IMAGE } from 'constants/actions'

const removeImage = (id, successCallback) => (dispatch) => {
  dispatch({
    type: REMOVE_IMAGE,
    payload: id,
    successCallback
  })
}

const tmp = () => () => {}

export { removeImage, tmp }
