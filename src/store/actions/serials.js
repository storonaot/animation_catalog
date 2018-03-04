import { FETCH_SERIALS, SHOW_PRELOADER } from 'constants/actions'

const fetchSerials = () => (dispatch) => {
  dispatch({
    type: SHOW_PRELOADER
  })
  dispatch({
    type: FETCH_SERIALS
  })
}

export default fetchSerials
