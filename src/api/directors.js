import axios from 'axios'
import { GET_DIRECTORS, CREATE_DIRECTOR, REMOVE_DIRECTOR } from 'constants/api'

const fetchDirectors = () => axios.get(GET_DIRECTORS).then(response => response)
const createDirector = data =>
  axios.post(CREATE_DIRECTOR, data).then(response => response)
const removeDirector = id =>
  axios.delete(REMOVE_DIRECTOR(id)).then(response => response)

export default { fetchDirectors, createDirector, removeDirector }
