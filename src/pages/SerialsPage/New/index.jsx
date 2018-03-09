import { Component } from 'react'
import { connect } from 'react-redux'

import { createSerial } from 'store/actions/serials'

import SerialForm from 'components/forms/SerialForm'

type Props = {
  onCreateSerial: Function,
}

class SerialsNew extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <SerialForm formType="new" sendData={this.props.onCreateSerial} />
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateSerial: (data) => {
    dispatch(createSerial(data))
  }
})

export default connect(null, mapDispatchToProps)(SerialsNew)
