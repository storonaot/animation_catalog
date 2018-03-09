import axios from 'axios'
import {
  GET_SERIALS,
  GET_SERIAL,
  CREATE_SERIAL,
  UPDATE_SERIAL,
  DELETE_SERIAL
} from 'constants/api'

const fetchSerials = () => axios.get(GET_SERIALS).then(response => response)
const fetchSerial = id => axios.get(GET_SERIAL(id)).then(response => response)
const createSerial = data =>
  axios.post(CREATE_SERIAL, data).then(response => response)
const updateSerial = (id, data) =>
  axios.put(UPDATE_SERIAL(id), data).then(response => response)

const deleteSerial = id =>
  axios.delete(DELETE_SERIAL(id)).then(response => response)

export default {
  fetchSerials,
  fetchSerial,
  createSerial,
  updateSerial,
  deleteSerial
}
