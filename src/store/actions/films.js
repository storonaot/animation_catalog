import {
  CREATE_FILM,
  FETCH_FILMS,
  FETCH_FILM,
  UPDATE_FILM,
  REMOVE_FILM,
  CHANGE_FILM_MARK
} from 'constants/actions'

const createFilm = data => (dispatch) => {
  dispatch({
    type: CREATE_FILM,
    payload: data
  })
}

const fetchFilms = query => (dispatch) => {
  dispatch({
    type: FETCH_FILMS,
    query
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

const changeFilmMark = (id, data) => (dispatch) => {
  // liked, viewed, selected
  dispatch({
    type: CHANGE_FILM_MARK,
    id,
    payload: data
  })
}

export { createFilm, fetchFilms, updateFilm, removeFilm, fetchFilm, changeFilmMark }
