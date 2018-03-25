import { CREATE_SEASON, FETCH_SEASONS } from 'constants/actions'

const createSeason = data => (dispatch) => {
  dispatch({
    type: CREATE_SEASON,
    payload: data
  })
}

const fetchSeasons = serialId => (dispatch) => {
  dispatch({
    type: FETCH_SEASONS,
    serialId
  })
}

export { createSeason, fetchSeasons }
