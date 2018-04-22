import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as formReducer } from 'redux-form'

import ui from './ui'
import serials from './serials'
import serial from './serial'
import countries from './countries'
import directors from './directors'
import studios from './studios'
import seasons from './seasons'
import season from './season'
import episode from './episode'
import episodes from './episodes'
import translations from './translations'
import languages from './languages'
import videoformats from './videoformats'
import films from './films'
import film from './film'
import dvds from './dvds'
import dvd from './dvd'

export default combineReducers({
  router: routerReducer,
  form: formReducer,
  ui,
  serials,
  serial,
  countries,
  directors,
  studios,
  seasons,
  season,
  episode,
  episodes,
  languages,
  translations,
  videoformats,
  films,
  film,
  dvds,
  dvd
})
