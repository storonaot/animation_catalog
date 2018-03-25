// import { directorsFormatter } from 'utils/formatter'
import {
  FETCH_SEASONS_DONE,
  CREATE_SEASON_DONE,
  UPDATE_SEASON_DONE,
  REMOVE_SEASON_DONE
} from 'constants/actions'
import { removeObjById, updateObjInCollection } from 'utils/newState'
import { sortBy as _sortBy } from 'lodash'

const defaultState = []

export default function seasons(state = defaultState, action) {
  switch (action.type) {
    case FETCH_SEASONS_DONE:
      return action.result
    case CREATE_SEASON_DONE: {
      const newState = [...state, action.result]
      return _sortBy(newState, ['number'])
    }
    case UPDATE_SEASON_DONE: {
      const newState = updateObjInCollection(state, action.result)
      return _sortBy(newState, 'number')
    }
    case REMOVE_SEASON_DONE: {
      const seasonId = action.result._id
      return removeObjById(state, seasonId)
    }
    default:
      return state
  }
}

// _.sortBy(users, [function(o) { return o.user; }]);
