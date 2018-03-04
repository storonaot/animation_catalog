import { FETCH_SERIAL_DONE } from 'constants/actions'

const defaultState = {
  data: null
}

export default function serial(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIAL_DONE:
      return { data: action.result }
    default:
      return state
  }
}
