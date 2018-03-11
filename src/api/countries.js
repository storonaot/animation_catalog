import axios from 'axios'
import { GET_COUNTRIES, CREATE_COUNTRY } from 'constants/api'

const fetchCountries = () => axios.get(GET_COUNTRIES).then(response => response)
const createCountry = data =>
  axios.post(CREATE_COUNTRY, data).then(response => response)

export default { fetchCountries, createCountry }
