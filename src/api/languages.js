import axios from 'libs/axios'
import { GET_LANGUAGES, CREATE_LANGUAGE } from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchLanguages = () => axios.get(GET_LANGUAGES).then(onSuccess, onError)
const createLanguage = data =>
  axios.post(CREATE_LANGUAGE, data).then(onSuccess, onError)

export default { fetchLanguages, createLanguage }
