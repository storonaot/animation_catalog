import { Grid } from 'components/grids/CoversGrid'
import Cover from 'components/common/Cover'

type Props = {
  serials: Array,
  removeSerial: Function,
}

const SerialsList = ({ serials, removeSerial }: Props) => (
  <Grid>
    {serials.map(serial => (
      <Cover
        key={serial._id}
        cover={serial.cover}
        editPath={`/serials/${serial._id}/edit`}
        id={serial._id}
        name={serial.name}
        showPath={`/serials/${serial._id}/show`}
        removeSerial={removeSerial}
      />
    ))}
  </Grid>
)

export default SerialsList
