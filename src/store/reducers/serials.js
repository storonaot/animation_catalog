import {
  FETCH_SERIALS_DONE,
  UPDATE_SERIAL_DONE,
  CREATE_SERIAL_DONE,
  REMOVE_SERIAL_DONE
} from 'constants/actions'

import { formatInObj, formatInCollection, directorFormatter } from 'utils/data-formatter'
import { removeObjById } from 'utils/newState'

const defaultState = []

export default function serials(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SERIALS_DONE:
      return formatInCollection(action.result, 'directors', directorFormatter)
    case UPDATE_SERIAL_DONE: {
      const serialId = action.result._id
      const newState = state.map((serial) => {
        if (serial._id === serialId) {
          return formatInObj(action.result, 'directors', directorFormatter)
        }
        return serial
      })
      return newState
    }
    case CREATE_SERIAL_DONE: {
      if (state.length) {
        return [...state, action.result]
      }
      return state
    }
    case REMOVE_SERIAL_DONE: {
      const serialId = action.result._id
      return removeObjById(state, serialId)
    }
    default:
      return state
  }
}
