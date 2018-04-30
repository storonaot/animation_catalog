import { Link } from 'react-router-dom'
import { Tooltip } from 'react-tippy'

import { Box } from 'components/grids/CoversGrid'
import getCover from 'utils/cover'
import cropper from 'utils/cropper'

import Controls from './Controls'
import Marks from './Marks'

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
  orientation?: string,
  selectMark?: string,
  marks: Object
}

const Cover = ({
  cover,
  id,
  name,
  showPath,
  remove,
  edit,
  small,
  orientation,
  selectMark,
  marks
}: Props) => (
  <Box style={coverStyles(cover)} small={small} orientation={orientation}>
    <Controls
      onRemove={() => {
        remove(id)
      }}
      onEdit={() => {
        edit(id)
      }}
    />
    {selectMark && <Marks id={id} selectMark={selectMark} marks={marks} />}

    <Link to={showPath} href={showPath} style={nameLinkStyle}>
      <Tooltip title={name} style={nameStyle}>
        <span>{cropper(name, 25)}</span>
      </Tooltip>
    </Link>
  </Box>
)

Cover.defaultProps = {
  remove: false,
  edit: false,
  small: false,
  cover: null,
  selectMark: null,
  orientation: 'vertical' // 'gorizontal'
}

export default Cover
