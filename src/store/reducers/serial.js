import { directorsFormatter } from 'utils/formatter'
import { FETCH_SERIAL_DONE, UPDATE_SERIAL_DONE } from 'constants/actions'

const defaultState = null

export default function serial(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIAL_DONE: {
      const { directors } = action.result
      const formattedDirectors = directorsFormatter(directors)
      return { ...action.result, directors: formattedDirectors }
    }
    case UPDATE_SERIAL_DONE: {
      console.log('UPDATE_SERIAL_DONE ONE', action)
      return state
    }
    default:
      return state
  }
}
