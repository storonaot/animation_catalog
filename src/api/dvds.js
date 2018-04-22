import axios from 'libs/axios'
import { GET_DVDS, GET_DVD, CREATE_DVD, UPDATE_DVD, REMOVE_DVD } from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchDvds = () => axios.get(GET_DVDS).then(onSuccess, onError)
const fetchDvd = id => axios.get(GET_DVD(id)).then(onSuccess, onError)
const createDvd = data => axios.post(CREATE_DVD, data).then(onSuccess, onError)
const updateDvd = (id, data) => axios.put(UPDATE_DVD(id), data).then(onSuccess, onError)
const removeDvd = id => axios.delete(REMOVE_DVD(id)).then(onSuccess, onError)

export default {
  fetchDvds,
  fetchDvd,
  createDvd,
  updateDvd,
  removeDvd
}
