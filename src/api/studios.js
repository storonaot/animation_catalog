import axios from 'axios'
import { GET_STUDIOS, CREATE_STUDIO, REMOVE_STUDIO } from 'constants/api'

const fetchStudios = () => axios.get(GET_STUDIOS).then(response => response)
const createStudio = data =>
  axios.post(CREATE_STUDIO, data).then(response => response)
const removeStudio = id =>
  axios.delete(REMOVE_STUDIO(id)).then(response => response)

export default { fetchStudios, createStudio, removeStudio }
