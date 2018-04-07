import axios from 'libs/axios'
import { GET_COUNTRIES, CREATE_COUNTRY, REMOVE_COUNTRY } from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchCountries = () => axios.get(GET_COUNTRIES).then(onSuccess, onError)
const createCountry = data =>
  axios.post(CREATE_COUNTRY, data).then(onSuccess, onError)
const removeCountry = id =>
  axios.delete(REMOVE_COUNTRY(id)).then(onSuccess, onError)

export default { fetchCountries, createCountry, removeCountry }
