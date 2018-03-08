import { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSerial } from 'store/actions/serials'

import Serial from 'components/Serial'

type Props = {
  match: Object,
  onFetchSerial: Function,
  serial?: Object,
}

class SerialPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { match, onFetchSerial, serial } = this.props
    const { id } = match.params
    if (!serial || serial._id !== id) {
      onFetchSerial(id)
    }
  }

  render() {
    const { serial } = this.props
    if (serial) return <Serial serial={serial} />
    return null
  }
}

const mapStateToProps = state => ({
  serial: state.serial
})

const mapDispatchToProps = dispatch => ({
  onFetchSerial: (id) => {
    dispatch(fetchSerial(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialPage)
