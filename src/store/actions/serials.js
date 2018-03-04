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

export { fetchSerials, fetchSerial }
