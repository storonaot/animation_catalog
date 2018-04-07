import { FETCH_LANGUAGE_DONE, CREATE_LANGUAGE_DONE } from 'constants/actions'

const defaultState = []

export default function languages(state = defaultState, action) {
  switch (action.type) {
    case FETCH_LANGUAGE_DONE:
      return action.result
    case CREATE_LANGUAGE_DONE:
      return [...state, action.result]
    default:
      return state
  }
}
