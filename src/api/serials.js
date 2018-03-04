import axios from 'axios'
import { GET_SERIALS, GET_SERIAL } from 'constants/api'

const fetchSerials = () => axios.get(GET_SERIALS).then(response => response)

const fetchSerial = id => axios.get(GET_SERIAL(id)).then(response => response)

export default { fetchSerials, fetchSerial }
