import { removeObjById } from 'utils/newState'
import {
  FETCH_TRANSLATIONS_DONE,
  CREATE_TRANSLATION_DONE,
  REMOVE_TRANSLATION_DONE
} from 'constants/actions'

const defaultState = []

export default function translations(state = defaultState, action) {
  switch (action.type) {
    case FETCH_TRANSLATIONS_DONE:
      return action.result
    case CREATE_TRANSLATION_DONE:
      return [...state, action.result]
    case REMOVE_TRANSLATION_DONE:
      return removeObjById(state, action.result)
    default:
      return state
  }
}
