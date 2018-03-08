import { directorsFormatter } from 'utils/formatter'
import { FETCH_SERIAL_DONE } from 'constants/actions'

const defaultState = null

export default function serial(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIAL_DONE: {
      const { directors } = action.result
      const formattedDirectors = directorsFormatter(directors)
      return { data: { ...action.result, directors: formattedDirectors } }
    }
    default:
      return state
  }
}
