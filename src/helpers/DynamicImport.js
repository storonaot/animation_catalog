import { Component } from 'react'
import PageShell from 'helpers/PageShell'

type Props = {
  load: Function,
  children: Object,
}

class DynamicImport extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      component: null
    }
  }

  componentWillMount() {
    this.props.load().then(mod => this.setState({ component: mod.default }))
  }

  render() {
    return this.props.children(this.state.component)
  }
}

const moduleUploader = moduleName => props => (
  <DynamicImport load={() => import(`containers/${moduleName}`)}>
    {Comp => (Comp === null ? null : PageShell(Comp)(props))}
  </DynamicImport>
)

export default moduleUploader
