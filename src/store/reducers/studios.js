import { FETCH_STUDIOS_DONE } from 'constants/actions'

const defaultState = {
  data: []
}

export default function studios(state = defaultState, action) {
  switch (action.type) {
    case FETCH_STUDIOS_DONE:
      return { data: action.result }
    default:
      return state
  }
}
