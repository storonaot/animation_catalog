import {
  FETCH_SERIALS,
  FETCH_SERIAL,
  UPDATE_SERIAL,
  CREATE_SERIAL
} from 'constants/actions'

const fetchSerials = () => (dispatch) => {
  dispatch({
    type: FETCH_SERIALS
  })
}

const fetchSerial = id => (dispatch) => {
  dispatch({
    type: FETCH_SERIAL,
    id
  })
}

const updateSerial = (id, data) => (dispatch) => {
  dispatch({
    type: UPDATE_SERIAL,
    id,
    payload: data
  })
}

const createSerial = data => (dispatch) => {
  dispatch({
    type: CREATE_SERIAL,
    payload: data
  })
}

export { fetchSerials, fetchSerial, updateSerial, createSerial }
