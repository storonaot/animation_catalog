import { directorsFormatter, directorFormatter } from 'utils/formatter'
import { removeObjById } from 'utils/newState'

import {
  FETCH_DIRECTORS_DONE,
  CREATE_DIRECTOR_DONE,
  REMOVE_DIRECTOR_DONE
} from 'constants/actions'

const defaultState = []

export default function directors(state = defaultState, action) {
  switch (action.type) {
    case FETCH_DIRECTORS_DONE:
      return directorsFormatter(action.result)
    case CREATE_DIRECTOR_DONE: {
      const newDirector = directorFormatter(action.result)
      return [...state, newDirector]
    }
    case REMOVE_DIRECTOR_DONE: {
      const directorId = action.result
      return removeObjById(state, directorId)
    }
    default:
      return state
  }
}
