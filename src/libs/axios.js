import axios from 'axios'
import { BASE_URL, API } from 'constants/api'

axios.defaults.baseURL = `${BASE_URL}/${API}`

export default axios
