import { Component } from 'react'

class DynamicImport extends Component {
  state = {
    component: null
  }

  componentWillMount() {
    this.props.load().then(mod =>
      this.setState(() => ({
        component: mod.default
      }))
    )
  }

  render() {
    return this.props.children(this.state.component)
  }
}

const moduleUploader = moduleName => props => (
  <DynamicImport load={() => import(`containers/${moduleName}`)}>
    {Component => (Component === null ? <h1>Loading!</h1> : <Component {...props} />)}
  </DynamicImport>
)

export default moduleUploader
