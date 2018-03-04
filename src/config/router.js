import React from 'react'
import { Route, Switch } from 'react-router-dom'

import moduleUploader from 'helpers/DynamicImport'
import App from 'pages/App'

const Index = moduleUploader('Index')
const Serials = moduleUploader('SerialsPage')
// const SerialsNew = moduleUploader('Serials/New')
const Serial = moduleUploader('SerialPage')
// const SerialEdit = moduleUploader('Serial/Edit')

const MyRouter = () => (
  <App face="TRUE">
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/serials" component={Serials} />
      <Route path="/serials/:id/show" component={Serial} />
    </Switch>
  </App>
)

export default MyRouter
