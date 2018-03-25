import { Link } from 'react-router-dom'
import { Box } from 'components/grids/CoversGrid'
import getCover from 'utils/cover'

import Controls from './Controls'

const coverStyles = cover => ({
  backgroundImage: `url(${getCover(cover)})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
})

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
  cover?: Object,
  editPath?: string,
  id: string,
  name: string,
  showPath: string,
  removeSerial?: Function,
}

const Cover = ({
  cover,
  editPath,
  id,
  name,
  showPath,
  removeSerial
}: Props) => (
  <Box style={coverStyles(cover)}>
    {editPath &&
      removeSerial &&
      <Controls
        editPath={editPath}
        onRemove={() => {
          removeSerial(id)
        }}
      />}
    <Link to={showPath} style={nameLinkStyle}>
      <span style={nameStyle}>{name}</span>
    </Link>
  </Box>
)

export default Cover
