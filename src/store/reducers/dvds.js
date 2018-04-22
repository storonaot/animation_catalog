import {
  FETCH_DVDS_DONE,
  CREATE_DVD_DONE,
  UPDATE_DVD_DONE,
  REMOVE_DVD_DONE
} from 'constants/actions'

const defaultState = []

export default function dvds(state = defaultState, action) {
  switch (action.type) {
    case FETCH_DVDS_DONE:
      return state
    case CREATE_DVD_DONE:
      return state
    case UPDATE_DVD_DONE:
      return state
    case REMOVE_DVD_DONE:
      return state
    default:
      return state
  }
}
