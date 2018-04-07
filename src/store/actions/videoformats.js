import {
  FETCH_VIDEOFORMATS,
  CREATE_VIDEOFORMAT,
  REMOVE_VIDEOFORMAT
} from 'constants/actions'

const fetchVideoformats = () => (dispatch) => {
  dispatch({
    type: FETCH_VIDEOFORMATS
  })
}

const createVideoformat = data => (dispatch) => {
  dispatch({
    type: CREATE_VIDEOFORMAT,
    payload: data
  })
}

const removeVideoformat = id => (dispatch) => {
  dispatch({
    type: REMOVE_VIDEOFORMAT,
    payload: id
  })
}

export { fetchVideoformats, createVideoformat, removeVideoformat }
