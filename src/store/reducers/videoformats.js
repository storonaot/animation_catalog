import { removeObjById } from 'utils/newState'
import { formatInArr, videoformatFormatter } from 'utils/data-formatter'

import {
  FETCH_VIDEOFORMATS_DONE,
  CREATE_VIDEOFORMAT_DONE,
  REMOVE_VIDEOFORMAT_DONE
} from 'constants/actions'

const defaultState = []

export default function videoformats(state = defaultState, action) {
  switch (action.type) {
    case FETCH_VIDEOFORMATS_DONE:
      return formatInArr(action.result, videoformatFormatter)
    case CREATE_VIDEOFORMAT_DONE: {
      const newVideoformat = videoformatFormatter(action.result)
      return [...state, newVideoformat]
    }
    case REMOVE_VIDEOFORMAT_DONE: {
      const videoformatId = action.result
      return removeObjById(state, videoformatId)
    }
    default:
      return state
  }
}
