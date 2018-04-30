import { Grid } from 'components/grids/CoversGrid'
import Cover from 'components/common/Cover'

type Props = {
  episodes: Array,
  removeEpisode: Function,
  editEpisode: Function,
  orientation?: string,
  small?: boolean,
  selectMark?: Function
}

const getName = episode =>
  (episode.number ? `${episode.number}. ${episode.name}` : `${episode.name}`)

const EpisodesList = ({
  episodes,
  removeEpisode,
  editEpisode,
  orientation,
  small,
  selectMark
}: Props) => (
  <Grid>
    {episodes.map(episode => (
      <Cover
        key={episode._id}
        cover={episode.cover}
        id={episode._id}
        name={getName(episode)}
        showPath={`/episodes/${episode._id}/show`}
        orientation={orientation}
        remove={removeEpisode}
        edit={editEpisode}
        small={small}
        selectMark={selectMark}
        marks={episode.marks}
      />
    ))}
  </Grid>
)

EpisodesList.defaultProps = {
  orientation: 'gorizontal',
  small: false,
  selectMark: null
}

export default EpisodesList
