import {
  FETCH_DIRECTORS,
  CREATE_DIRECTOR,
  REMOVE_DIRECTOR
} from 'constants/actions'

const fetchDirectors = () => (dispatch) => {
  dispatch({
    type: FETCH_DIRECTORS
  })
}

const createDirector = data => (dispatch) => {
  dispatch({
    type: CREATE_DIRECTOR,
    payload: data
  })
}

const removeDirector = id => (dispatch) => {
  dispatch({
    type: REMOVE_DIRECTOR,
    payload: id
  })
}

export { fetchDirectors, createDirector, removeDirector }
