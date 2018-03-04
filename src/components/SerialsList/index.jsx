import { Link } from 'react-router-dom'

type Props = {
  serials: Array,
}

const SerialsList = ({ serials }: Props) => (
  <ul>
    {serials.map(serial => (
      <div key={serial._id}>
        <Link to={`/serials/${serial._id}/show`}>
          <li>{serial.name}</li>
        </Link>
        <Link to={`/serials/${serial._id}/edit`}>Edit</Link>
      </div>
    ))}
  </ul>
)

export default SerialsList
