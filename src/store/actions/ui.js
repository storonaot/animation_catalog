import { TOGGLE_SIDEBAR } from 'constants/actions'

const toggleSidebar = () => (dispatch) => {
  dispatch({
    type: TOGGLE_SIDEBAR
  })
}

const showPreloader = null

export { toggleSidebar, showPreloader }
