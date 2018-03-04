import axios from 'axios'
import { GET_SERIALS } from 'constants/api'

const fetchSerials = () => axios.get(GET_SERIALS).then(response => response)

const fetchSerial = (id) => {
  console.log('fetchSerial', id)
}

export default { fetchSerials, fetchSerial }
