import { TOGGLE_SIDEBAR } from 'constants/action'

const toggleSidebar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR
  })
}

export default toggleSidebar
