import {
  CREATE_SEASON,
  FETCH_SEASONS,
  FETCH_SEASON,
  UPDATE_SEASON,
  REMOVE_SEASON
} from 'constants/actions'

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

const fetchSeason = id => (dispatch) => {
  dispatch({
    type: FETCH_SEASON,
    id
  })
}

const updateSeason = (id, data) => (dispatch) => {
  dispatch({
    type: UPDATE_SEASON,
    id,
    payload: data
  })
}

const removeSeason = id => (dispatch) => {
  dispatch({
    type: REMOVE_SEASON,
    id
  })
}

export { createSeason, fetchSeasons, updateSeason, removeSeason, fetchSeason }
