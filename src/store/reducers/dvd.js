import { FETCH_DVD_DONE } from 'constants/actions'

const defaultState = null

export default function dvd(state = defaultState, action) {
  switch (action.type) {
    case FETCH_DVD_DONE:
      return action.result
    default:
      return state
  }
}
