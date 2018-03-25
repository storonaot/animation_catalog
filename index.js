// @flow
import 'css-wipe'
import 'react-tippy/dist/tippy.css'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import MyRouter from 'config/router'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import history from 'libs/history'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import reducers from 'store/reducers'
import helloSaga from 'store/sagas'

const sagaMiddleware = createSagaMiddleware()
const routerMiddleWare = routerMiddleware(history)
const middlewares = [routerMiddleWare, thunk, sagaMiddleware]

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middlewares))
)

sagaMiddleware.run(helloSaga)

const rootEl: HTMLElement = (document.getElementById('root'): any)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <MyRouter />
    </ConnectedRouter>
  </Provider>,
  rootEl
)
