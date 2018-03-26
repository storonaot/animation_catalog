import { Grid } from 'components/grids/CoversGrid'
import Cover from 'components/common/Cover'

type Props = {
  episodes: Array,
  removeEpisode: Function,
  editEpisode: Function,
}

const EpisodesList = ({ episodes, removeEpisode, editEpisode }: Props) => (
  <Grid>
    {episodes.map(episode => (
      <Cover
        key={episode._id}
        cover={episode.cover}
        id={episode._id}
        name={`${episode.name}.`}
        showPath={`/episodes/${episode._id}/show`}
        small
        remove={removeEpisode}
        edit={editEpisode}
      />
    ))}
  </Grid>
)

export default EpisodesList
