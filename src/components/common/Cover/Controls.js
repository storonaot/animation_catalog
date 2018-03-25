import Edit from 'material-ui/svg-icons/image/edit'
import ContentClear from 'material-ui/svg-icons/content/clear'
import IconButton from 'material-ui/IconButton'

type Props = {
  onRemove: Function,
  onEdit: Function,
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

const Controls = ({ onEdit, onRemove }: Props) => (
  <div style={wrapperStyles}>
    <IconButton style={IconStyles} hoveredStyle={hoveredStyle} onClick={onEdit}>
      <Edit color='#fff' />
    </IconButton>
    <IconButton
      style={IconStyles}
      hoveredStyle={hoveredStyle}
      onClick={onRemove}
    >
      <ContentClear color='#fff' />
    </IconButton>
  </div>
)

export default Controls
