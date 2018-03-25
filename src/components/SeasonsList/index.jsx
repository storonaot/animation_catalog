import { Grid } from 'components/grids/CoversGrid'
import Cover from 'components/common/Cover'

type Props = {
  seasons: Array,
}

const SeasonsList = ({ seasons }: Props) => (
  <Grid>
    {seasons.map(season => (
      <Cover
        key={season._id}
        cover={season.cover}
        id={season._id}
        name={`Сезон ${season.number}. ${season.name || ''}`}
        showPath={`/seasons/${season._id}/show`}
        small
      />
    ))}
  </Grid>
)

export default SeasonsList
