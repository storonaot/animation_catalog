import {
  FETCH_FILMS_DONE,
  CREATE_FILM_DONE,
  UPDATE_FILM_DONE,
  REMOVE_FILM_DONE,
  CHANGE_FILM_MARK_DONE
} from 'constants/actions'
import {
  videoformatFormatter,
  directorFormatter,
  formatInCollectionByParameters,
  formatInObjByParameters
} from 'utils/data-formatter'
import { removeObjById } from 'utils/newState'

import { NUMBER_OF_FILMS_PER_PAGE } from 'constants/index'

const defaultState = {
  list: [],
  count: null
}

const keys = ['directors', 'videoformat']
const formatters = [directorFormatter, videoformatFormatter]

export default function films(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FILMS_DONE: {
      const { count } = action.result
      const formattedFilms = formatInCollectionByParameters(action.result.list, keys, formatters)
      const list = formattedFilms.slice(0, NUMBER_OF_FILMS_PER_PAGE)
      return { ...state, list, count }
    }
    case CREATE_FILM_DONE: {
      const newFilm = formatInObjByParameters(action.result, keys, formatters)
      const list = [newFilm, ...state.list].slice(0, NUMBER_OF_FILMS_PER_PAGE)
      return { count: state.count + 1, list }
    }
    case UPDATE_FILM_DONE: {
      const filmId = action.result._id
      const newList = state.list.map((film) => {
        if (film._id === filmId) {
          return formatInObjByParameters(action.result, keys, formatters)
        }
        return film
      })

      return { ...state, list: newList }
    }
    case REMOVE_FILM_DONE: {
      const filmId = action.result._id
      const newList = removeObjById(state.list, filmId)
      return { count: state.count - 1, list: newList }
    }
    case CHANGE_FILM_MARK_DONE: {
      const list = state.list.map((film) => {
        if (film._id === action.result._id) return { ...film, marks: action.result.marks }
        return film
      })

      return { ...state, list }
    }
    default:
      return state
  }
}
