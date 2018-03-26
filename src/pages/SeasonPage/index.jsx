import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchSeason } from 'store/actions/seasons'
import { GoBack, AddBtn } from 'components/common'
import Season from 'components/Season'
import EpisodesList from 'components/EpisodesList'
import EpisodeForm from 'components/forms/EpisodeForm'

type Props = {
  match: Object,
  onFetchSeason: Function,
  season?: Object,
  episodes: Array,
}

class SeasonPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      formOpened: false,
      currentEpisode: null
    }

    this.showForm = this.showForm.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  componentDidMount() {
    const { match: { params: { id } }, onFetchSeason } = this.props
    onFetchSeason(id)
  }

  showForm() {
    // if (episodeId) console.log('showForm', episodeId)
    this.setState({ formOpened: true })
  }

  closeForm() {
    this.setState({ formOpened: false, currentSeason: null })
  }

  send(data) {
    console.log('send', data)
  }

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
          <h1>Сезоны: </h1>
          <AddBtn handleClick={this.showForm} />
          <EpisodesList
            episodes={episodes}
            removeEpisode={() => {}}
            editEpisode={() => {}}
          />
          {formOpened &&
            <EpisodeForm
              sendData={this.send}
              showed={formOpened}
              onClose={this.closeForm}
              initialValues={currentEpisode}
            />}
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SeasonPage)
