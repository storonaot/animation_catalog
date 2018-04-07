import {
  FETCH_COUNTRIES_DONE,
  CREATE_COUNTRY_DONE,
  REMOVE_COUNTRY_DONE
} from 'constants/actions'
import { removeObjById } from 'utils/newState'

const defaultState = []

export default function serials(state = defaultState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_DONE:
      return action.result
    case CREATE_COUNTRY_DONE:
      return [...state, action.result]
    case REMOVE_COUNTRY_DONE:
      return removeObjById(state, action.result)
    default:
      return state
  }
}
