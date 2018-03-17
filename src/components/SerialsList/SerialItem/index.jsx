import { Link } from 'react-router-dom'
import { Box } from 'components/grids/SerialsGrid'
import { BASE_URL } from 'constants/api'

import Controls from './Controls'

const noImage = require('images/no-image.jpg')

const getCover = (cover) => {
  const image = cover ? `${BASE_URL}/${cover.path}` : noImage

  return {
    backgroundImage: `url(${image})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  }
}

const nameLinkStyle = {
  width: '100%',
  height: '100%',
  position: 'absolute',
  left: 0,
  top: 0
}

const nameStyle = {
  color: '#fff',
  padding: '0 20px',
  textDecoration: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  width: '100%',
  fontSize: '1.2em',
  lineHeight: '1.2em',
  height: 80,
  display: 'flex',
  alignItems: 'center',
  position: 'absolute',
  bottom: 0
}

type Props = {
  serial: Object,
  removeSerial: Function,
}

const Serial = ({ serial, removeSerial }: Props) => (
  <Box key={serial._id} style={getCover(serial.cover)}>
    <Controls
      editPath={`/serials/${serial._id}/edit`}
      onRemove={() => {
        removeSerial(serial._id)
      }}
    />
    <Link to={`/serials/${serial._id}/show`} style={nameLinkStyle}>
      <span style={nameStyle}>{serial.name}</span>
    </Link>
  </Box>
)

export default Serial
