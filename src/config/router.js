import React from 'react'
import { Route, Switch } from 'react-router-dom'

import moduleUploader from 'helpers/DynamicImport'
import App from 'containers/App'

const Index = moduleUploader('Index')
const Serials = moduleUploader('Serials')
// const SerialsNew = moduleUploader('Serials/New')
// const Serial = moduleUploader('Serial')
// const SerialEdit = moduleUploader('Serial/Edit')

const MyRouter = () => (
  <App face="TRUE">
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/serials" component={Serials} />
    </Switch>
  </App>
)

export default MyRouter
