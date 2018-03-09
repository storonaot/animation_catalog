import { FETCH_SERIALS_DONE, UPDATE_SERIAL_DONE } from 'constants/actions'

const defaultState = []

export default function serials(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIALS_DONE:
      return action.result
    case UPDATE_SERIAL_DONE: {
      console.log('UPDATE_SERIAL_DONE ALL', action)
      return state
    }
    default:
      return state
  }
}
