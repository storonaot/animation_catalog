import { Grid } from 'components/grids/CoversGrid'
import Cover from 'components/common/Cover'

type Props = {
  episodes: Array,
  removeEpisode: Function,
  editEpisode: Function,
  orientation?: string,
  small?: boolean
}

const EpisodesList = ({
  episodes, removeEpisode, editEpisode, orientation, small
}: Props) => (
  <Grid>
    {episodes.map(episode => (
      <Cover
        key={episode._id}
        cover={episode.cover}
        id={episode._id}
        name={`${episode.number}. ${episode.name}.`}
        showPath={`/episodes/${episode._id}/show`}
        orientation={orientation}
        remove={removeEpisode}
        edit={editEpisode}
        small={small}
      />
    ))}
  </Grid>
)

EpisodesList.defaultProps = {
  orientation: 'gorizontal',
  small: false
}

export default EpisodesList
