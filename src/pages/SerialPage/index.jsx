import { Component } from 'react'
import { connect } from 'react-redux'
import { formDataFormatter } from 'utils/formatter'

// actions
import { fetchSerial } from 'store/actions/serials'
import {
  createSeason,
  fetchSeasons,
  removeSeason,
  updateSeason
} from 'store/actions/seasons'
import { showConfirmDialog } from 'store/actions/ui'

// components
import Serial from 'components/Serial'
import { GoBack, AddBtn } from 'components/common'
import SeasonForm from 'components/forms/SeasonForm'
import SeasonsList from 'components/SeasonsList'

type Props = {
  match: Object,
  onFetchSerial: Function,
  serial?: Object,
  seasons: Array,
  onCreateSeason: Function,
  onFetchSeasons: Function,
  onShowConfirmDialog: Function,
  onRemoveSeason: Function,
  onUpdateSeason: Function,
}

class SerialPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      formOpened: false,
      currentSeason: null
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

  setCurrentSeason(seasonId) {
    const { seasons } = this.props
    const currentSeason = seasons.find(season => season._id === seasonId)
    this.setState({ currentSeason })
  }

  showForm(seasonId) {
    if (seasonId) this.setCurrentSeason(seasonId)
    this.setState({ formOpened: true })
  }

  closeForm() {
    this.setState({ formOpened: false, currentSeason: null })
  }

  send(data) {
    const { onUpdateSeason, onCreateSeason, match } = this.props

    const serialId = match.params.id

    if (data._id) {
      const { _id } = data
      onUpdateSeason(_id, formDataFormatter(data))
    } else {
      const hhh = Object.assign(data, { serial: serialId })
      onCreateSeason(formDataFormatter(hhh))
    }
    this.closeForm()
  }

  showConfirmDialog(seasonId) {
    const { onShowConfirmDialog, seasons, onRemoveSeason } = this.props

    const number = seasons.find(season => season._id === seasonId).number

    onShowConfirmDialog({
      title: 'Удаление',
      message: `Вы уверены что хотите удалить ${number} сезон?`,
      onSuccess: () => onRemoveSeason(seasonId)
    })
  }

  render() {
    const { serial, seasons } = this.props
    const { formOpened, currentSeason } = this.state
    if (serial) {
      return (
        <div>
          <GoBack to="/serials" label="Вернуться к списку сериалов" />
          <Serial serial={serial} />
          <br />
          <br />
          <h1>Сезоны: </h1>
          <AddBtn handleClick={this.showForm} />
          <SeasonsList
            seasons={seasons}
            removeSeason={(id) => {
              this.showConfirmDialog(id)
            }}
            editSeason={(id) => {
              this.showForm(id)
            }}
          />
          {formOpened &&
            <SeasonForm
              sendData={this.send}
              showed={formOpened}
              onClose={this.closeForm}
              initialValues={currentSeason}
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
  },
  onShowConfirmDialog: (data) => {
    dispatch(showConfirmDialog(data))
  },
  onRemoveSeason: (id) => {
    dispatch(removeSeason(id))
  },
  onUpdateSeason: (id, data) => {
    dispatch(updateSeason(id, data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialPage)
