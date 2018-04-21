import { Component } from 'react'
import { connect } from 'react-redux'
import { AddBtn } from 'components/common'

import {
  fetchSerials,
  removeSerial,
  createSerial,
  updateSerial
} from 'store/actions/serials'
import { showConfirmDialog } from 'store/actions/ui'
import { formDataFormatter } from 'utils/form-helper'

import SerialForm from 'components/forms/SerialForm'

import SerialsList from 'components/SerialsList'

type Props = {
  onFetchSerials: Function,
  serials?: Array<{
    _id: string,
    description: string,
    name: string,
    originalName: string,
  }>,
  onRemoveSerial: Function,
  onShowConfirmDialog: Function,
  onCreateSerial: Function,
  onUpdateSerial: Function,
}

class SerialsPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      formOpened: false,
      currentSerial: null
    }

    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.send = this.send.bind(this)
  }

  componentDidMount() {
    const { serials, onFetchSerials } = this.props
    if (!serials.length) onFetchSerials()
  }

  setCurrentSerial(serialId) {
    const { serials } = this.props
    const currentSerial = serials.find(serial => serial._id === serialId)
    this.setState({ currentSerial })
  }

  showForm(serialId) {
    if (serialId) this.setCurrentSerial(serialId)
    this.setState({ formOpened: true })
  }

  closeForm() {
    this.setState({ formOpened: false, currentSerial: null })
  }

  showConfirmDialog(serialId) {
    const { onShowConfirmDialog, onRemoveSerial, serials } = this.props

    const { name } = serials.find(serial => serial._id === serialId)

    onShowConfirmDialog({
      title: 'Удаление',
      message: `Вы уверены что хотите удалить ${name}?`,
      onSuccess: () => onRemoveSerial(serialId)
    })
  }

  send(data) {
    const { onUpdateSerial, onCreateSerial } = this.props
    if (data._id) {
      const { _id } = data
      onUpdateSerial(_id, formDataFormatter(data))
    } else {
      onCreateSerial(formDataFormatter(data))
    }
    this.closeForm()
  }

  render() {
    const { serials } = this.props
    const { formOpened, currentSerial } = this.state

    return (
      <div style={{ textAlign: 'right' }}>
        <AddBtn handleClick={this.showForm} />
        <SerialsList
          serials={serials}
          removeSerial={(id) => {
            this.showConfirmDialog(id)
          }}
          editSerial={(id) => {
            this.showForm(id)
          }}
        />
        {formOpened &&
          <SerialForm
            showed={formOpened}
            sendData={this.send}
            onClose={this.closeForm}
            initialValues={currentSerial}
          />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  serials: state.serials
})

const mapDispatchToProps = dispatch => ({
  onFetchSerials: () => {
    dispatch(fetchSerials())
  },
  onRemoveSerial: (id) => {
    dispatch(removeSerial(id))
  },
  onShowConfirmDialog: (data) => {
    dispatch(showConfirmDialog(data))
  },
  onCreateSerial: (data) => {
    dispatch(createSerial(data))
  },
  onUpdateSerial: (id, data) => {
    dispatch(updateSerial(id, data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialsPage)
