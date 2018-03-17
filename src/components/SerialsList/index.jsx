import { Grid } from 'components/grids/SerialsGrid'
import SerialItem from './SerialItem'

type Props = {
  serials: Array,
  removeSerial: Function,
}

const SerialsList = ({ serials, removeSerial }: Props) => (
  <Grid>
    {serials.map(serial => (
      <SerialItem
        key={serial._id}
        serial={serial}
        removeSerial={removeSerial}
      />
    ))}
  </Grid>
)

export default SerialsList
