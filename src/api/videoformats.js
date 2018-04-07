import axios from 'libs/axios'
import {
  GET_VIDEOFORMATS,
  CREATE_VIDEOFORMAT,
  REMOVE_VIDEOFORMAT
} from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchVideoformats = () =>
  axios.get(GET_VIDEOFORMATS).then(onSuccess, onError)
const createVideoformat = data =>
  axios.post(CREATE_VIDEOFORMAT, data).then(onSuccess, onError)
const removeVideoformat = id =>
  axios.delete(REMOVE_VIDEOFORMAT(id)).then(onSuccess, onError)

export default { fetchVideoformats, createVideoformat, removeVideoformat }
