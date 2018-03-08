import { removeObjById } from 'utils/newState'
import {
  FETCH_STUDIOS_DONE,
  CREATE_STUDIO_DONE,
  REMOVE_STUDIO_DONE
} from 'constants/actions'

const defaultState = []

export default function studios(state = defaultState, action) {
  switch (action.type) {
    case FETCH_STUDIOS_DONE:
      return action.result
    case CREATE_STUDIO_DONE:
      return [...state, action.result]
    case REMOVE_STUDIO_DONE:
      return removeObjById(state, action.result)
    default:
      return state
  }
}
