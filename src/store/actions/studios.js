import { FETCH_STUDIOS, CREATE_STUDIO, REMOVE_STUDIO } from 'constants/actions'

const fetchStudios = () => (dispatch) => {
  dispatch({
    type: FETCH_STUDIOS
  })
}

const createStudio = data => (dispatch) => {
  dispatch({
    type: CREATE_STUDIO,
    payload: data
  })
}

const removeStudio = id => (dispatch) => {
  dispatch({
    type: REMOVE_STUDIO,
    payload: id
  })
}

export { fetchStudios, createStudio, removeStudio }
