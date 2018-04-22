import { CREATE_FILM, FETCH_FILMS, FETCH_FILM, UPDATE_FILM, REMOVE_FILM } from 'constants/actions'

const createFilm = data => (dispatch) => {
  dispatch({
    type: CREATE_FILM,
    payload: data
  })
}

const fetchFilms = seasonId => (dispatch) => {
  dispatch({
    type: FETCH_FILMS,
    seasonId
  })
}

const fetchFilm = id => (dispatch) => {
  dispatch({
    type: FETCH_FILM,
    id
  })
}

const updateFilm = (id, data) => (dispatch) => {
  dispatch({
    type: UPDATE_FILM,
    id,
    payload: data
  })
}

const removeFilm = id => (dispatch) => {
  dispatch({
    type: REMOVE_FILM,
    id
  })
}

export { createFilm, fetchFilms, updateFilm, removeFilm, fetchFilm }
