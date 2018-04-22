import { Component } from 'react'
import { connect } from 'react-redux'

import { fetchEpisode } from 'store/actions/episodes'
import { GoBack } from 'components/common'

type Props = {
  episode: Object,
  match: Object,
  onFetchEpisode: Function
}

class EpisodePage extends Component<Props> {
  componentDidMount() {
    const { match: { params: { id } }, onFetchEpisode } = this.props
    onFetchEpisode(id)
  }

  render() {
    const { episode } = this.props
    const seasonId = episode ? episode.season : null

    if (episode) {
      return (
        <div>
          <GoBack to={`/seasons/${seasonId}/show`} label="Вернуться к списку серий" />
          <div>
            {episode.number} {episode.name}
          </div>
        </div>
      )
    }

    return null
  }
}

const mapStateToProps = state => ({
  episode: state.episode
})
const mapDispatchToProps = dispatch => ({
  onFetchEpisode: (id) => {
    dispatch(fetchEpisode(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EpisodePage)
