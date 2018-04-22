import {
  FETCH_FILMS_DONE,
  CREATE_FILM_DONE,
  UPDATE_FILM_DONE,
  REMOVE_FILM_DONE
} from 'constants/actions'
import {
  videoformatFormatter,
  directorFormatter,
  formatInCollectionByParameters,
  formatInObjByParameters
} from 'utils/data-formatter'
import { removeObjById } from 'utils/newState'

const defaultState = []

const keys = ['directors', 'videoformat']
const formatters = [directorFormatter, videoformatFormatter]

export default function films(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FILMS_DONE: {
      return formatInCollectionByParameters(action.result, keys, formatters)
    }
    case CREATE_FILM_DONE: {
      const dataFormatted = formatInObjByParameters(action.result, keys, formatters)
      return [...state, dataFormatted]
    }
    case UPDATE_FILM_DONE:
      return state
    case REMOVE_FILM_DONE: {
      const filmId = action.result._id
      return removeObjById(state, filmId)
    }
    default:
      return state
  }
}
