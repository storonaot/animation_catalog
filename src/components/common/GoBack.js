import { Link } from 'react-router-dom'
import { orange500 } from 'material-ui/styles/colors'
import ArrowBack from 'material-ui/svg-icons/navigation/arrow-back'

type Props = {
  label: string,
  to: string,
}

const linkStyle = {
  marginBottom: 20,
  display: 'flex',
  alignItems: 'center',
  color: orange500,
  textDecoration: 'none',
  fontSize: '1.2em'
}

const GoBack = ({ label, to }: Props) => (
  <Link style={linkStyle} to={to}>
    <ArrowBack color={orange500} style={{ marginRight: 10 }} />{label}
  </Link>
)

export default GoBack
