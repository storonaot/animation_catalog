import { Component } from 'react'
import { connect } from 'react-redux'

import { formDataFormatter } from 'utils/form-helper'

import { fetchSeason } from 'store/actions/seasons'
import { createEpisode, fetchEpisodes, updateEpisode, removeEpisode } from 'store/actions/episodes'
import { showConfirmDialog } from 'store/actions/ui'

import { GoBack, AddBtn } from 'components/common'
import Season from 'components/Season'
import EpisodesList from 'components/EpisodesList'
import EpisodeForm from 'components/forms/EpisodeForm'

type Props = {
  match: Object,
  onFetchSeason: Function,
  season?: Object,
  episodes: Array,
  onCreateEpisode: Function,
  onFetchEpisodes: Function,
  onUpdateEpisode: Function,
  onShowConfirmDialog: Function,
  onRemoveEpisode: Function
}

class SeasonPage extends Component<Props> {
  state = {
    formOpened: false,
    currentEpisode: null
  }

  componentDidMount() {
    const { match: { params: { id } }, onFetchSeason, onFetchEpisodes } = this.props
    onFetchSeason(id)
    onFetchEpisodes(id)
  }

  setCurrentEpisode = (episodeId) => {
    const { episodes } = this.props
    const currentEpisode = episodes.find(season => season._id === episodeId)
    this.setState({ currentEpisode })
  }

  showForm = (episodeId) => {
    if (episodeId) this.setCurrentEpisode(episodeId)
    this.setState({ formOpened: true })
  }

  closeForm = () => {
    this.setState({ formOpened: false })
  }

  send = (data) => {
    const { onCreateEpisode, onUpdateEpisode, season } = this.props

    const seasonId = season._id
    const serialId = season.serial._id

    if (data._id) {
      const { _id } = data
      onUpdateEpisode(_id, formDataFormatter(data))
    } else {
      const dataObj = Object.assign(data, { season: seasonId, serial: serialId })
      onCreateEpisode(formDataFormatter(dataObj))
    }
    this.closeForm()
  }

  showConfirmDialog = (episodeId) => {
    const { onShowConfirmDialog, episodes, onRemoveEpisode } = this.props

    const { name } = episodes.find(season => season._id === episodeId)

    onShowConfirmDialog({
      title: 'Удаление',
      message: `Вы уверены что хотите удалить ${name}?`,
      onSuccess: () => onRemoveEpisode(episodeId)
    })
  }

  render() {
    const { formOpened, currentEpisode } = this.state
    const { season, episodes } = this.props
    const serialId = season ? season.serial._id : null
    if (season) {
      return (
        <div>
          <GoBack to={`/serials/${serialId}/show`} label="Вернуться к списку сезонов" />
          <Season season={season} />
          <br />
          <br />
          <h1>Серии: </h1>
          <AddBtn handleClick={this.showForm} />
          <EpisodesList
            episodes={episodes}
            removeEpisode={(id) => {
              this.showConfirmDialog(id)
            }}
            editEpisode={(id) => {
              this.showForm(id)
            }}
          />
          {formOpened && (
            <EpisodeForm
              sendData={this.send}
              showed={formOpened}
              onClose={this.closeForm}
              initialValues={currentEpisode}
            />
          )}
        </div>
      )
    }

    return null
  }
}

const mapStateToProps = state => ({
  season: state.season,
  episodes: state.episodes
})

const mapDispatchToProps = dispatch => ({
  onFetchSeason: (id) => {
    dispatch(fetchSeason(id))
  },
  onFetchEpisodes: (seasonId) => {
    dispatch(fetchEpisodes(seasonId))
  },
  onCreateEpisode: (data) => {
    dispatch(createEpisode(data))
  },
  onUpdateEpisode: (id, data) => {
    dispatch(updateEpisode(id, data))
  },
  onRemoveEpisode: (id) => {
    dispatch(removeEpisode(id))
  },
  onShowConfirmDialog: (data) => {
    dispatch(showConfirmDialog(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SeasonPage)
