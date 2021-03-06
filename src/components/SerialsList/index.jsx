import { Grid } from 'components/grids/CoversGrid'
import Cover from 'components/common/Cover'

type Props = {
  serials: Array,
  removeSerial: Function,
  editSerial: Function,
}

const SerialsList = ({ serials, removeSerial, editSerial }: Props) => {
  if (serials) {
    return (
      <Grid>
        {serials.map(serial => (
          <Cover
            key={serial._id}
            cover={serial.cover}
            editPath={`/serials/${serial._id}/edit`}
            id={serial._id}
            name={serial.name}
            showPath={`/serials/${serial._id}/show`}
            remove={removeSerial}
            edit={editSerial}
          />
        ))}
      </Grid>
    )
  }
  return null
}

export default SerialsList
