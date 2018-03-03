import { FETCH_SERIALS_DONE } from 'constants/actions'

const defaultState = {
  data: null
}

export default function serials(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIALS_DONE:
      return { data: action.result }
    default:
      return state
  }
}
