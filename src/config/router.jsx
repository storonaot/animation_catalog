import React from 'react'
import { Route, Switch } from 'react-router-dom'

import moduleUploader from 'helpers/DynamicImport'
import App from 'pages/App'

const Index = moduleUploader('Index')
const Serials = moduleUploader('SerialsPage')
const Serial = moduleUploader('SerialPage')
const Season = moduleUploader('SeasonPage')
const Episode = moduleUploader('EpisodePage')
const Films = moduleUploader('FilmsPage')
const Film = moduleUploader('FilmPage')

const Addition = moduleUploader('Addition')

const MyRouter = () => (
  <App face="TRUE">
    <Switch>
      <Route exact path="/" component={Index} />
      <Route exact path="/serials" component={Serials} />
      <Route path="/serials/:id/show" component={Serial} />
      <Route path="/seasons/:id/show" component={Season} />
      <Route path="/episodes/:id/show" component={Episode} />
      <Route exact path="/films" component={Films} />
      <Route path="/films/:id/show" component={Film} />
      <Route path="/addition" component={Addition} />
    </Switch>
  </App>
)

export default MyRouter
