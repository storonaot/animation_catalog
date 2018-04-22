import { FETCH_DVD, FETCH_DVDS, CREATE_DVD, UPDATE_DVD, REMOVE_DVD } from 'constants/actions'

const fetchDvds = () => (dispatch) => {
  dispatch({
    type: FETCH_DVDS
  })
}

const fetchDvd = id => (dispatch) => {
  dispatch({
    type: FETCH_DVD,
    id
  })
}

const createDvd = data => (dispatch) => {
  dispatch({
    type: CREATE_DVD,
    payload: data
  })
}

const updateDvd = (id, data) => (dispatch) => {
  dispatch({
    type: UPDATE_DVD,
    id,
    payload: data
  })
}

const removeDvd = id => (dispatch) => {
  dispatch({
    type: REMOVE_DVD,
    id
  })
}

export { fetchDvds, fetchDvd, createDvd, updateDvd, removeDvd }
