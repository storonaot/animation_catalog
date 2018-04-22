import { FETCH_FILM_DONE } from 'constants/actions'

const defaultState = null

export default function film(state = defaultState, action) {
  switch (action.type) {
    case FETCH_FILM_DONE:
      return action.result
    default:
      return state
  }
}
