import axios from 'libs/axios'
import {
  GET_EPISODES,
  GET_EPISODE,
  CREATE_EPISODE,
  UPDATE_EPISODE,
  REMOVE_EPISODE
} from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchEpisodes = seasonId => axios.get(GET_EPISODES(seasonId)).then(onSuccess, onError)
const fetchEpisode = id => axios.get(GET_EPISODE(id)).then(onSuccess, onError)
const createEpisode = data => axios.post(CREATE_EPISODE, data).then(onSuccess, onError)
const updateEpisode = (id, data) => axios.put(UPDATE_EPISODE(id), data).then(onSuccess, onError)
const removeEpisode = id => axios.delete(REMOVE_EPISODE(id)).then(onSuccess, onError)

export default {
  fetchEpisodes,
  fetchEpisode,
  createEpisode,
  updateEpisode,
  removeEpisode
}
