import axios from 'axios'
import { GET_DIRECTORS, CREATE_DIRECTOR, REMOVE_DIRECTOR } from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchDirectors = () => axios.get(GET_DIRECTORS).then(onSuccess, onError)
const createDirector = data =>
  axios.post(CREATE_DIRECTOR, data).then(onSuccess, onError)
const removeDirector = id =>
  axios.delete(REMOVE_DIRECTOR(id)).then(onSuccess, onError)

export default { fetchDirectors, createDirector, removeDirector }
