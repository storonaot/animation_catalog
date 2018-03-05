import axios from 'axios'
import { GET_COUNTRIES } from 'constants/api'

const fetchCountries = () => axios.get(GET_COUNTRIES).then(response => response)

export default { fetchCountries }
