import Edit from 'material-ui/svg-icons/image/edit'
import ContentClear from 'material-ui/svg-icons/content/clear'
import IconButton from 'material-ui/IconButton'
import styled from 'styled-components'

type Props = {
  onRemove: Function,
  onEdit: Function
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`

const hoveredStyle = {
  backgroundColor: 'rgba(0, 0, 0, 0.6)'
}

const IconStyles = {
  backgroundColor: 'rgba(0, 0, 0, 0.3)'
}

const Controls = ({ onEdit, onRemove }: Props) => (
  <Wrapper>
    <IconButton style={IconStyles} hoveredStyle={hoveredStyle} onClick={onEdit}>
      <Edit color="#fff" />
    </IconButton>
    <IconButton style={IconStyles} hoveredStyle={hoveredStyle} onClick={onRemove}>
      <ContentClear color="#fff" />
    </IconButton>
  </Wrapper>
)

export default Controls
