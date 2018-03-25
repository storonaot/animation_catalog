import axios from 'libs/axios'
import {
  GET_SEASONS,
  CREATE_SEASON,
  UPDATE_SEASON,
  REMOVE_SEASON
} from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchSeasons = serialId =>
  axios.get(GET_SEASONS(serialId)).then(onSuccess, onError)
const createSeason = data =>
  axios.post(CREATE_SEASON, data).then(onSuccess, onError)
const updateSeason = (id, data) =>
  axios.put(UPDATE_SEASON(id), data).then(onSuccess, onError)
const removeSeason = id =>
  axios.delete(REMOVE_SEASON(id)).then(onSuccess, onError)

export default { createSeason, fetchSeasons, updateSeason, removeSeason }
