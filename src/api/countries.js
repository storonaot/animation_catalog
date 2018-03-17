import axios from 'libs/axios'
import { GET_COUNTRIES, CREATE_COUNTRY } from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchCountries = () => axios.get(GET_COUNTRIES).then(onSuccess, onError)
const createCountry = data =>
  axios.post(CREATE_COUNTRY, data).then(onSuccess, onError)

export default { fetchCountries, createCountry }
