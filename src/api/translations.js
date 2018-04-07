import axios from 'libs/axios'
import {
  GET_TRANSLATIONS,
  CREATE_TRANSLATION,
  REMOVE_TRANSLATION
} from 'constants/api'
import { onSuccess, onError } from './helpers'

axios.get('/translations').then((res) => {
  console.log('translations res', res, GET_TRANSLATIONS)
})

const fetchTranslations = () =>
  axios.get(GET_TRANSLATIONS).then(onSuccess, onError)
const createTranslation = data =>
  axios.post(CREATE_TRANSLATION, data).then(onSuccess, onError)
const removeTranslation = id =>
  axios.delete(REMOVE_TRANSLATION(id)).then(onSuccess, onError)

export default { fetchTranslations, createTranslation, removeTranslation }
