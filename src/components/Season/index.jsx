import getCover from 'utils/cover'

type Props = {
  season?: Object,
}

const Season = ({ season }: Props) => (
  <div>
    <div
      style={{
        width: 100,
        height: 100,
        backgroundImage: `url(${getCover(season.cover)})`,
        backgroundSize: 'cover'
      }}
    />
    <div>{season.serial.name} - {season.number} сезон. {season.name}</div>
  </div>
)

export default Season
