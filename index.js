import 'css-wipe'
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

import reducers from 'store/reducers'

const routerMW = routerMiddleware(history)
const mw = [routerMW, thunk]

const store = createStore(reducers, composeWithDevTools(applyMiddleware(...mw)))

const Hello = moduleUploader('Hello')
const Index = moduleUploader('Index')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App face="TRUE">
        <Route exact path="/" component={Index} />
        <Route path="/hello" component={Hello} />
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)
