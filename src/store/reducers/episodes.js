import {
  FETCH_EPISODES_DONE,
  CREATE_EPISODE_DONE,
  UPDATE_EPISODE_DONE,
  REMOVE_EPISODE_DONE
} from 'constants/actions'
import { sortBy as _sortBy } from 'lodash'
import { formatInCollection, formatInObj, videoformatFormatter } from 'utils/data-formatter'

const defaultState = []

export default function episodes(state = defaultState, action) {
  switch (action.type) {
    case FETCH_EPISODES_DONE:
      return formatInCollection(action.result, 'videoformat', videoformatFormatter)
    case CREATE_EPISODE_DONE: {
      const newState = [...state, action.result]
      return _sortBy(newState, ['number'])
    }
    case UPDATE_EPISODE_DONE: {
      const episodeId = action.result._id
      const newState = state.map((episode) => {
        if (episode._id === episodeId) {
          return formatInObj(action.result, 'videoformat', videoformatFormatter)
        }
        return episode
      })

      return _sortBy(newState, ['number'])
    }
    case REMOVE_EPISODE_DONE:
      return state
    default:
      return state
  }
}
