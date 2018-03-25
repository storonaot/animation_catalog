import getCover from 'utils/cover'

type Props = {
  serial: Object,
}

const Serial = ({ serial }: Props) => (
  <div>
    <div>{serial.name}</div>
    <div
      style={{
        width: 100,
        height: 100,
        backgroundImage: `url(${getCover(serial.cover)})`,
        backgroundSize: 'cover',
        backgrountPosition: 'center'
      }}
    />
  </div>
)

export default Serial
