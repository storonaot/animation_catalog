import { FETCH_SEASON_DONE } from 'constants/actions'

const defaultState = null

export default function season(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SEASON_DONE:
      return action.result
    default:
      return state
  }
}
