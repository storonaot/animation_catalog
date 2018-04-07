import axios from 'libs/axios'
import { GET_LANGUAGES, CREATE_LANGUAGE, REMOVE_LANGUAGE } from 'constants/api'
import { onSuccess, onError } from './helpers'

console.log('GET_LANGUAGES', GET_LANGUAGES)
console.log('CREATE_LANGUAGE', CREATE_LANGUAGE)
console.log('REMOVE_LANGUAGE', REMOVE_LANGUAGE)

const fetchLanguages = () => axios.get(GET_LANGUAGES).then(onSuccess, onError)
const createLanguage = data =>
  axios.post(CREATE_LANGUAGE, data).then(onSuccess, onError)
const removeLanguage = id =>
  axios.delete(REMOVE_LANGUAGE(id)).then(onSuccess, onError)

export default { fetchLanguages, createLanguage, removeLanguage }
