import { Grid } from 'components/grids/SerialsGrid'
import SerialItem from './SerialItem'

type Props = {
  serials: Array,
}

const SerialsList = ({ serials }: Props) => (
  <Grid>
    {serials.map(serial => <SerialItem key={serial._id} serial={serial} />)}
  </Grid>
)

export default SerialsList
