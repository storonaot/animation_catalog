import { directorsFormatter } from 'utils/formatter'

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
    case FETCH_DIRECTORS_DONE: {
      const formattedDirectors = directorsFormatter(action.result)
      return { data: formattedDirectors }
    }
    case CREATE_DIRECTOR_DONE: {
      return { data: [...state.data, action.result] }
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
