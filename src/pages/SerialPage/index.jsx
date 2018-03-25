import { Component } from 'react'
import { connect } from 'react-redux'
import { GoBack, AddBtn } from 'components/common'
import SeasonForm from 'components/forms/SeasonForm'
import SeasonsList from 'components/SeasonsList'
import { formDataFormatter } from 'utils/formatter'

import { fetchSerial } from 'store/actions/serials'
import { createSeason, fetchSeasons } from 'store/actions/seasons'

import Serial from 'components/Serial'

type Props = {
  match: Object,
  onFetchSerial: Function,
  serial?: Object,
  seasons: Array,
  onCreateSeason: Function,
  onFetchSeasons: Function,
}

class SerialPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      formOpened: false
    }

    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
    this.send = this.send.bind(this)
  }

  componentDidMount() {
    const { match, onFetchSerial, serial, onFetchSeasons } = this.props
    const { id } = match.params
    if (!serial || serial._id !== id) {
      onFetchSerial(id)
    }
    onFetchSeasons(id)
  }

  showForm() {
    this.setState({ formOpened: true })
  }

  closeForm() {
    this.setState({ formOpened: false, currentSerial: null })
  }

  send(data) {
    const { onCreateSeason, serial: { _id } } = this.props
    const serial = _id
    const newData = Object.assign(data, { serial })
    onCreateSeason(formDataFormatter(newData))
  }

  render() {
    const { serial, seasons } = this.props
    const { formOpened } = this.state
    if (serial) {
      return (
        <div>
          <GoBack to="/serials" label="Вернуться к списку сериалов" />
          <Serial serial={serial} />
          <AddBtn handleClick={this.showForm} />
          <SeasonsList seasons={seasons} />
          {formOpened &&
            <SeasonForm
              sendData={() => {}}
              showed={formOpened}
              onClose={this.closeForm}
            />}
        </div>
      )
    }
    return null
  }
}

const mapStateToProps = state => ({
  serial: state.serial,
  seasons: state.seasons
})

const mapDispatchToProps = dispatch => ({
  onFetchSerial: (id) => {
    dispatch(fetchSerial(id))
  },
  onFetchSeasons: (serialId) => {
    dispatch(fetchSeasons(serialId))
  },
  onCreateSeason: (data) => {
    dispatch(createSeason(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialPage)
