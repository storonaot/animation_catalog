import { Component } from 'react'
import { connect } from 'react-redux'
import { AddBtn } from 'components/common'

import { fetchSerials, removeSerial } from 'store/actions/serials'
import { showDialog } from 'store/actions/ui'

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
  onShowDialog: Function,
}

class SerialsPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { serials, onFetchSerials } = this.props
    if (!serials.length) onFetchSerials()
  }

  showDialog(id) {
    const { onShowDialog, onRemoveSerial, serials } = this.props

    const name = serials.find(serial => serial._id === id).name

    onShowDialog({
      title: 'Удаление',
      message: `Вы уверены что хотите удалить ${name}?`,
      onSuccess: () => onRemoveSerial(id)
    })
  }

  render() {
    const { serials } = this.props

    return (
      <div style={{ textAlign: 'right' }}>
        <button>OpenModal</button>
        <AddBtn to="/serials/new" />
        <SerialsList
          serials={serials}
          removeSerial={(id) => {
            this.showDialog(id)
          }}
        />
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
  onShowDialog: (data) => {
    dispatch(showDialog(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialsPage)
