import axios from 'axios'
import { GET_STUDIOS, CREATE_STUDIO } from 'constants/api'

const fetchStudios = () => axios.get(GET_STUDIOS).then(response => response)
const createStudio = data =>
  axios.post(CREATE_STUDIO, data).then(response => response)

export default { fetchStudios, createStudio }
