import { directorsFormatter, directorFormatter } from 'utils/formatter'

import {
  FETCH_DIRECTORS_DONE,
  CREATE_DIRECTOR_DONE,
  REMOVE_DIRECTOR_DONE
} from 'constants/actions'

const defaultState = {
  data: []
}

export default function directors(state = defaultState, action) {
  switch (action.type) {
    case FETCH_DIRECTORS_DONE:
      return { data: directorsFormatter(action.result) }
    case CREATE_DIRECTOR_DONE: {
      const newDirector = directorFormatter(action.result)
      const newState = state.data
      return { data: [...newState, newDirector] }
    }
    case REMOVE_DIRECTOR_DONE: {
      const directorId = action.result
      const newState = state.data.filter(
        director => director._id !== directorId
      )
      console.log('newState', newState)
      return { data: newState }
    }
    default:
      return state
  }
}
