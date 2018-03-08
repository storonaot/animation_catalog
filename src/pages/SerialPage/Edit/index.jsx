import { Component } from 'react'
import { connect } from 'react-redux'

import { fetchSerial, updateSerial } from 'store/actions/serials'

import SerialForm from 'components/forms/SerialForm'

type Props = {
  match: Object,
  onFetchSerial: Function,
  serial?: Object,
  onSendFormData: Function,
}

class SerialEdit extends Component<Props> {
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
    const { serial, onSendFormData } = this.props
    if (serial) return <SerialForm formType="edit" sendData={onSendFormData} />
    return null
  }
}

const mapStateToProps = state => ({
  serial: state.serial.data
})

const mapDispatchToProps = dispatch => ({
  onFetchSerial: (id) => {
    dispatch(fetchSerial(id))
  },
  onSendFormData: (data) => {
    dispatch(updateSerial(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialEdit)
