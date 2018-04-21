import { Component } from 'react'
import { connect } from 'react-redux'

import { formDataFormatter } from 'utils/form-helper'

import { fetchSeason } from 'store/actions/seasons'
import { createEpisode } from 'store/actions/episodes'

import { GoBack, AddBtn } from 'components/common'
import Season from 'components/Season'
import EpisodesList from 'components/EpisodesList'
import EpisodeForm from 'components/forms/EpisodeForm'

type Props = {
  match: Object,
  onFetchSeason: Function,
  season?: Object,
  episodes: Array,
  onCreateEpisode: Function
}

class SeasonPage extends Component<Props> {
  state = {
    formOpened: true,
    currentEpisode: null
  }

  componentDidMount() {
    const { match: { params: { id } }, onFetchSeason } = this.props
    onFetchSeason(id)
  }

  showForm = () => {
    this.setState({ formOpened: true })
  };

  closeForm = () => {
    this.setState({ formOpened: false })
  };

  send = (data) => {
    // TODO: add season and serial ids

    console.log('data', data)

    // const { onCreateEpisode, season } = this.props

    // const seasonId = season._id
    // const serialId = season.serial._id

    // const dataObj = Object.assign(data, { season: seasonId, serial: serialId })

    // onCreateEpisode(formDataFormatter(dataObj))
  };

  render() {
    const { formOpened, currentEpisode } = this.state
    const { season, episodes } = this.props
    const serialId = season ? season.serial._id : null
    if (season) {
      return (
        <div>
          <GoBack
            to={`/serials/${serialId}/show`}
            label="Вернуться к списку сезонов"
          />
          <Season season={season} />
          <br />
          <br />
          <h1>Серии: </h1>
          <AddBtn handleClick={this.showForm} />
          <EpisodesList
            episodes={episodes}
            removeEpisode={() => {}}
            editEpisode={() => {}}
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
  onCreateEpisode: (data) => {
    dispatch(createEpisode(data))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SeasonPage)
