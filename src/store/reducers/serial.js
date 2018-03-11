import { directorsFormatter } from 'utils/formatter'
import { FETCH_SERIAL_DONE, UPDATE_SERIAL_DONE } from 'constants/actions'

const defaultState = null

const formattedResult = (result) => {
  const { directors } = result
  const formattedDirectors = directorsFormatter(directors)
  return { ...result, directors: formattedDirectors }
}

export default function serial(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIAL_DONE:
      return formattedResult(action.result)
    case UPDATE_SERIAL_DONE:
      // TODO: подумать как объединить с serials
      return formattedResult(action.result)
    default:
      return state
  }
}
