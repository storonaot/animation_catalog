import { Component } from 'react'
import { connect } from 'react-redux'
import { serialDataFormatter } from 'utils/formatter'

import { createSerial } from 'store/actions/serials'

import SerialForm from 'components/forms/SerialForm'

type Props = {
  onCreateSerial: Function,
}

class SerialsNew extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
    this.send = this.send.bind(this)
  }

  send(data) {
    const { onCreateSerial } = this.props
    onCreateSerial(serialDataFormatter(data))
  }

  render() {
    return <SerialForm formType="new" sendData={this.send} />
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateSerial: (data) => {
    dispatch(createSerial(data))
  }
})

export default connect(null, mapDispatchToProps)(SerialsNew)
