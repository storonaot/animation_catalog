import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const PageShell = Page => props => (
  <ReactCSSTransitionGroup
    transitionAppear
    transitionAppearTimeout={600}
    transitionEnterTimeout={600}
    transitionLeaveTimeout={200}
    transitionName="SlideIn"
  >
    <Page {...props} />
  </ReactCSSTransitionGroup>
)
export default PageShell
