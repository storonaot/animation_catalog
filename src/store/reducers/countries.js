import { FETCH_COUNTRIES_DONE, CREATE_COUNTRY_DONE } from 'constants/actions'

const defaultState = []

export default function serials(state = defaultState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_DONE:
      return action.result
    case CREATE_COUNTRY_DONE:
      return [...state, action.result]
    default:
      return state
  }
}
