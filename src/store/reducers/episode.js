import { FETCH_EPISODE_DONE } from 'constants/actions'

const defaultState = null

export default function episode(state = defaultState, action) {
  switch (action.type) {
    case FETCH_EPISODE_DONE:
      return state
    default:
      return state
  }
}
