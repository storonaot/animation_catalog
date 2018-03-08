import { FETCH_STUDIOS } from 'constants/actions'

const fetchStudios = () => (dispatch) => {
  dispatch({
    type: FETCH_STUDIOS
  })
}

const createStudio = () => {}

export { fetchStudios, createStudio }
