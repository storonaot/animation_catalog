import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

type Props = {
  handleClick: Function,
}

const AddBtn = ({ handleClick }: Props) => (
  <FloatingActionButton
    secondary
    style={{ marginBottom: 20, display: 'inline-block' }}
    onClick={handleClick}
  >
    <ContentAdd />
  </FloatingActionButton>
)

export default AddBtn
