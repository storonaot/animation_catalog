import axios from 'libs/axios'
import { REMOVE_IMAGE } from 'constants/api'
import { onSuccess, onError } from './helpers'

const removeImage = id =>
  axios.delete(REMOVE_IMAGE(id)).then(onSuccess, onError)

export default { removeImage }
