import { Component } from 'react'
import { connect } from 'react-redux'
import { extractedIdsObj } from 'utils/formatter'
import { unset as _unset } from 'lodash'
import { GoBack } from 'components/common'

import { fetchSerial, updateSerial } from 'store/actions/serials'

import SerialForm from 'components/forms/SerialForm'

type Props = {
  match: Object,
  onFetchSerial: Function,
  serial?: Object,
  onUpdateSerial: Function,
}

class SerialEdit extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
    this.send = this.send.bind(this)
  }

  componentDidMount() {
    const { match, onFetchSerial, serial } = this.props
    const { id } = match.params
    if (!serial || serial._id !== id) {
      onFetchSerial(id)
    }
  }

  send(data) {
    const { onUpdateSerial, match: { params: { id } } } = this.props

    if (data.cover instanceof File) {
      const cover = data.cover
      _unset(data, 'cover')
      const stringData = JSON.stringify(extractedIdsObj(data))
      const form = new FormData()
      form.append('cover', cover)
      form.append('data', stringData)
      onUpdateSerial(id, form)
    } else {
      const sendData = extractedIdsObj(data)

      onUpdateSerial(id, { data: JSON.stringify(sendData) })
    }
  }

  render() {
    const { serial } = this.props
    if (serial) {
      return (
        <div>
          <GoBack to="/serials" label="Вернуться к списку сериалов" />
          <SerialForm formType="edit" sendData={this.send} />
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = state => ({
  serial: state.serial
})

const mapDispatchToProps = dispatch => ({
  onFetchSerial: (id) => {
    dispatch(fetchSerial(id))
  },
  onUpdateSerial: (id, data) => {
    dispatch(updateSerial(id, data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialEdit)
