import { Grid } from 'components/grids/CoversGrid'
import Cover from 'components/common/Cover'

type Props = {
  seasons: Array,
  removeSeason: Function,
  editSeason: Function,
}

const SeasonsList = ({ seasons, removeSeason, editSeason }: Props) => (
  <Grid>
    {seasons.map(season => (
      <Cover
        key={season._id}
        cover={season.cover}
        id={season._id}
        name={`Сезон ${season.number}. ${season.name || ''}`}
        showPath={`/seasons/${season._id}/show`}
        small
        remove={removeSeason}
        edit={editSeason}
      />
    ))}
  </Grid>
)

export default SeasonsList
