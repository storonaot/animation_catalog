import { FETCH_SERIALS, SHOW_PRELOADER, FETCH_SERIAL } from 'constants/actions'

const fetchSerials = () => (dispatch) => {
  dispatch({
    type: SHOW_PRELOADER
  })
  dispatch({
    type: FETCH_SERIALS
  })
}

const fetchSerial = id => (dispatch) => {
  dispatch({
    type: SHOW_PRELOADER
  })
  dispatch({
    type: FETCH_SERIAL,
    id
  })
}

const updateSerial = data => () => {
  console.log('updateSerial', data)
}

const createSerial = data => () => {
  console.log('createSerial', data)
}

export { fetchSerials, fetchSerial, updateSerial, createSerial }
