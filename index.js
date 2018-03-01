// @flow

import 'css-wipe'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Route } from 'react-router-dom'

import moduleUploader from 'helpers/DynamicImport'
import App from 'containers/App'

import { ConnectedRouter, routerMiddleware } from 'react-router-redux'
import history from 'utils/history'
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

const Hello = moduleUploader('Hello')
const Index = moduleUploader('Index')

sagaMiddleware.run(helloSaga)

const rootEl: HTMLElement = (document.getElementById('pad'): any)

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App face="TRUE">
        <Route exact path="/" component={Index} />
        <Route path="/hello" component={Hello} />
      </App>
    </ConnectedRouter>
  </Provider>,
  rootEl
)
