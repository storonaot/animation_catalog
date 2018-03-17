import { Link } from 'react-router-dom'
import Edit from 'material-ui/svg-icons/image/edit'
import ContentClear from 'material-ui/svg-icons/content/clear'
import IconButton from 'material-ui/IconButton'

type Props = {
  editPath: string,
  onRemove: Function,
}

const wrapperStyles = {
  position: 'absolute',
  top: 0,
  right: 0,
  zIndex: 2
}

const hoveredStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)'
}

const IconStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)'
}

const Controls = ({ editPath, onRemove }: Props) => (
  <div style={wrapperStyles}>
    <Link to={editPath}>
      <IconButton style={IconStyles} hoveredStyle={hoveredStyle}>
        <Edit color="#fff" />
      </IconButton>
    </Link>
    <IconButton
      style={IconStyles}
      hoveredStyle={hoveredStyle}
      onClick={onRemove}
    >
      <ContentClear color="#fff" />
    </IconButton>
  </div>
)

export default Controls
