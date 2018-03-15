import { REMOVE_IMAGE } from 'constants/actions'

const removeImage = id => (dispatch) => {
  dispatch({
    type: REMOVE_IMAGE,
    payload: id
  })
}

const tmp = () => () => {}

export { removeImage, tmp }
