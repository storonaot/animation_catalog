import { formatDirectorsInObj } from 'utils/formatter'
import { FETCH_SERIAL_DONE, UPDATE_SERIAL_DONE } from 'constants/actions'

const defaultState = null

export default function serial(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIAL_DONE:
      return formatDirectorsInObj(action.result)
    case UPDATE_SERIAL_DONE:
      return formatDirectorsInObj(action.result)
    default:
      return state
  }
}
