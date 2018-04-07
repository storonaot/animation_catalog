import { formatInObj, directorFormatter } from 'utils/data-formatter'
import { FETCH_SERIAL_DONE, UPDATE_SERIAL_DONE } from 'constants/actions'

const defaultState = null

export default function serial(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIAL_DONE:
      return formatInObj(action.result, 'directors', directorFormatter)
    case UPDATE_SERIAL_DONE:
      return formatInObj(action.result, 'directors', directorFormatter)
    default:
      return state
  }
}
