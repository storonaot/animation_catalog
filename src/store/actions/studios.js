import { FETCH_STUDIOS, CREATE_STUDIO } from 'constants/actions'

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

export { fetchStudios, createStudio }
