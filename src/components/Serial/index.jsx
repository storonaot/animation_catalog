import getCover from 'utils/cover'

type Props = {
  serial: Object,
}

const join = (collection, key = 'name') => {
  const names = collection.map(item => item[key])
  return names.join(', ')
}

const Serial = ({ serial }: Props) => (
  <div>
    <div
      style={{
        width: 100,
        height: 100,
        backgroundImage: `url(${getCover(serial.cover)})`,
        backgroundSize: 'cover',
        backgrountPosition: 'center'
      }}
    />
    <div>Название: {serial.name}</div>
    <div>Оригинальное название: {serial.originalName}</div>
    <div>Описание: {serial.description}</div>
    <div>Режиссеры: {join(serial.directors)}</div>
    <div>Страны: {join(serial.countries)}</div>
    <div>Студии: {join(serial.studios)}</div>
  </div>
)

export default Serial
