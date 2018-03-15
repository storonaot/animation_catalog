import axios from 'axios'
import {
  GET_SERIALS,
  GET_SERIAL,
  CREATE_SERIAL,
  UPDATE_SERIAL,
  DELETE_SERIAL
} from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchSerials = () => axios.get(GET_SERIALS).then(onSuccess, onError)
const fetchSerial = id => axios.get(GET_SERIAL(id)).then(onSuccess, onError)
const createSerial = data =>
  axios.post(CREATE_SERIAL, data).then(onSuccess, onError)
const updateSerial = (id, data) =>
  axios.put(UPDATE_SERIAL(id), data).then(onSuccess, onError)

const deleteSerial = id =>
  axios.delete(DELETE_SERIAL(id)).then(onSuccess, onError)

export default {
  fetchSerials,
  fetchSerial,
  createSerial,
  updateSerial,
  deleteSerial
}
