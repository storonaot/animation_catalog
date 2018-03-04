import { Link } from 'react-router-dom'

type Props = {
  serials: Array,
}

const SerialsList = ({ serials }: Props) => (
  <ul>
    {serials.map(serial => (
      <Link to={`/serials/${serial._id}/show`} key={serial._id}>
        <li>{serial.name}</li>
      </Link>
    ))}
  </ul>
)

export default SerialsList
