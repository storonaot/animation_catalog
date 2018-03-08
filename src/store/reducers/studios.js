import { FETCH_STUDIOS_DONE, CREATE_STUDIO_DONE } from 'constants/actions'

const defaultState = {
  data: []
}

export default function studios(state = defaultState, action) {
  switch (action.type) {
    case FETCH_STUDIOS_DONE:
      return { data: action.result }
    case CREATE_STUDIO_DONE: {
      return { data: [...state.data, action.result] }
    }
    default:
      return state
  }
}
