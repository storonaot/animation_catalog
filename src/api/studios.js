import axios from 'axios'
import { GET_STUDIOS } from 'constants/api'

const fetchStudios = () => axios.get(GET_STUDIOS).then(response => response)

export default { fetchStudios }
