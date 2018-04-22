import {
  FETCH_FILMS_DONE,
  CREATE_FILM_DONE,
  UPDATE_FILM_DONE,
  REMOVE_FILM_DONE
} from 'constants/actions'

const defaultState = []

export default function films(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FILMS_DONE:
      return state
    case CREATE_FILM_DONE:
      return state
    case UPDATE_FILM_DONE:
      return state
    case REMOVE_FILM_DONE:
      return state
    default:
      return state
  }
}
