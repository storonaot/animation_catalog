import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tippy'

import { Box } from 'components/grids/CoversGrid'
import getCover from 'utils/cover'
import cropper from 'utils/cropper'

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
  id: string,
  name: string,
  showPath: string,
  remove?: Function,
  edit?: Function,
  small?: boolean,
}

const Cover = ({ cover, id, name, showPath, remove, edit, small }: Props) => (
  <Box style={coverStyles(cover)} small={small}>
    <Controls
      onRemove={() => {
        remove(id)
      }}
      onEdit={() => {
        edit(id)
      }}
    />
    <Link to={showPath} style={nameLinkStyle}>
      <Tooltip title={name} style={nameStyle}>
        <span>{cropper(name, 25)}</span>
      </Tooltip>
    </Link>

  </Box>
)

export default Cover
