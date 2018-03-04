import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import ui from './ui'
import user from './user'
import serials from './serials'
import serial from './serial'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  ui,
  user,
  serials,
  serial
})
