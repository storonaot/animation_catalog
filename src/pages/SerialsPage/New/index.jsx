import { Component } from 'react'
import { connect } from 'react-redux'
import { serialDataFormatter } from 'utils/formatter'

import { createSerial } from 'store/actions/serials'

import SerialForm from 'components/forms/SerialForm'
import { GoBack } from 'components/common'

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
    return (
      <div>
        <GoBack to="/serials" label="Вернуться к списку сериалов" />
        <SerialForm formType="new" sendData={this.send} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateSerial: (data) => {
    dispatch(createSerial(data))
  }
})

export default connect(null, mapDispatchToProps)(SerialsNew)
