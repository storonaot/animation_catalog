// import { directorsFormatter } from 'utils/formatter'
import { FETCH_SEASONS_DONE, CREATE_SEASON_DONE } from 'constants/actions'

const defaultState = []

export default function seasons(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SEASONS_DONE:
      return action.result
    case CREATE_SEASON_DONE:
      return [...state, action.result]
    default:
      return state
  }
}
