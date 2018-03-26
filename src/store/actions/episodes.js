import {
  CREATE_EPISODE,
  FETCH_EPISODES,
  FETCH_EPISODE,
  UPDATE_EPISODE,
  REMOVE_EPISODE
} from 'constants/actions'

const createEpisode = data => (dispatch) => {
  dispatch({
    type: CREATE_EPISODE,
    payload: data
  })
}

const fetchEpisodes = seasonId => (dispatch) => {
  dispatch({
    type: FETCH_EPISODES,
    seasonId
  })
}

const fetchEpisode = id => (dispatch) => {
  dispatch({
    type: FETCH_EPISODE,
    id
  })
}

const updateEpisode = (id, data) => (dispatch) => {
  dispatch({
    type: UPDATE_EPISODE,
    id,
    payload: data
  })
}

const removeEpisode = id => (dispatch) => {
  dispatch({
    type: REMOVE_EPISODE,
    id
  })
}

export {
  createEpisode,
  fetchEpisodes,
  updateEpisode,
  removeEpisode,
  fetchEpisode
}
