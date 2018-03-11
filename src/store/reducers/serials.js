import { FETCH_SERIALS_DONE, UPDATE_SERIAL_DONE } from 'constants/actions'

const defaultState = []

export default function serials(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIALS_DONE:
      return action.result
    case UPDATE_SERIAL_DONE: {
      // TODO: подумать как объединить с serial
      const serialId = action.result._id
      const newState = state.map((serial) => {
        if (serial._id === serialId) return action.result
        return serial
      })
      return newState
    }
    default:
      return state
  }
}
