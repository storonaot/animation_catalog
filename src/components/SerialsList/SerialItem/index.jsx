import { Link } from 'react-router-dom'
import { Box } from 'components/grids/SerialsGrid'
import { SOURCE } from 'constants/api'
import Edit from 'material-ui/svg-icons/image/edit'
import IconButton from 'material-ui/IconButton'

const getCover = (cover) => {
  if (cover) {
    return {
      backgroundImage: `url(${SOURCE}/${cover.path})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }
  }
  return null
}

const nameLinkStyle = {
  color: '#fff',
  padding: '0 20px',
  textDecoration: 'none',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  width: '100%',
  fontSize: '1.2em',
  lineHeight: '1.2em',
  height: 80,
  display: 'flex',
  alignItems: 'center'
}

type Props = {
  serial: Object,
}

const Serial = ({ serial }: Props) => (
  <Box key={serial._id} style={getCover(serial.cover)}>
    <Link to={`/serials/${serial._id}/edit`}>
      <IconButton
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          top: 0,
          right: 0,
          position: 'absolute'
        }}
        hoveredStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
      >
        <Edit color="#fff" />
      </IconButton>
    </Link>
    <Link to={`/serials/${serial._id}/show`} style={nameLinkStyle}>
      <span>{serial.name}</span>
    </Link>
  </Box>
)

export default Serial
