import { FETCH_SERIALS } from 'constants/actions'

const fetchSerials = () => (dispatch) => {
  dispatch({
    type: FETCH_SERIALS
  })
}

export default fetchSerials
