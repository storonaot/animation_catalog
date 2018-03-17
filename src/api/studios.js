import axios from 'libs/axios'
import { GET_STUDIOS, CREATE_STUDIO, REMOVE_STUDIO } from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchStudios = () => axios.get(GET_STUDIOS).then(onSuccess, onError)
const createStudio = data =>
  axios.post(CREATE_STUDIO, data).then(onSuccess, onError)
const removeStudio = id =>
  axios.delete(REMOVE_STUDIO(id)).then(onSuccess, onError)

export default { fetchStudios, createStudio, removeStudio }
