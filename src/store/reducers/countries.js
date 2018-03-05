import { FETCH_COUNTRIES_DONE } from 'constants/actions'

const defaultState = {
  data: []
}

export default function serials(state = defaultState, action) {
  switch (action.type) {
    case FETCH_COUNTRIES_DONE:
      return { data: action.result }
    default:
      return state
  }
}
