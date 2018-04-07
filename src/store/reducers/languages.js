import { removeObjById } from 'utils/newState'

import {
  FETCH_LANGUAGES_DONE,
  CREATE_LANGUAGE_DONE,
  REMOVE_LANGUAGE_DONE
} from 'constants/actions'

const defaultState = []

export default function languages(state = defaultState, action) {
  switch (action.type) {
    case FETCH_LANGUAGES_DONE: {
      return action.result
    }
    case CREATE_LANGUAGE_DONE:
      return [...state, action.result]
    case REMOVE_LANGUAGE_DONE:
      return removeObjById(state, action.result)

    default:
      return state
  }
}
