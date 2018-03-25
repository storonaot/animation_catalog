import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

type Props = {
  to: string,
}

const AddBtn = ({ to }: Props) => (
  <Link to={to} style={{ marginBottom: 20, display: 'inline-block' }}>
    <FloatingActionButton secondary>
      <ContentAdd />
    </FloatingActionButton>
  </Link>
)

export default AddBtn
