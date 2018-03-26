import { FETCH_EPISODES_DONE } from 'constants/actions'

const defaultState = []

export default function episodes(state = defaultState, action) {
  switch (action.type) {
    case FETCH_EPISODES_DONE:
      return state
    default:
      return state
  }
}
