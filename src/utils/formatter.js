import { forIn as _forIn, unset as _unset } from 'lodash'

// TODO: Подумать как объединить функции форматирования directors и videoformats
const directorFormatter = ({ name, originalName, ...rest }) => ({
  name: `${name.first || ''} ${name.last}`,
  originalName: `${originalName.first || ''} ${originalName.last}`,
  ...rest
})
const directorsFormatter = directors => directors.map(directorFormatter)
const formatDirectorsInObj = (data) => {
  const { directors } = data
  const formattedDirectors = directorsFormatter(directors)
  return { ...data, directors: formattedDirectors }
}

const formatDirestorsInCollection = collection =>
  collection.map(formatDirectorsInObj)

const videoformatFormatter = ({ name, format, ...rest }) => ({
  name: `${format} ${name}`,
  ...rest
})
const videoformatsFormatter = videoformats =>
  videoformats.map(videoformatFormatter)
const formatVideoformatsInObj = (data) => {
  const { videoformats } = data
  const formattedVideoformats = videoformatsFormatter(videoformats)
  return { ...data, directors: formattedVideoformats }
}
const formatVideoformatsInCollection = collection =>
  collection.map(formatVideoformatsInObj)
// TODO: end

// Необходимо получить массив из айдишников
// [{ _id: 123, name: 'Name1' }, { _id: 456, name: 'Name2' }] => [123, 456]
const extractIds = arr => arr.map(({ _id }) => _id)

// TODO: Нечитаемая функция - непонятно что делает и как
// перебираем объект, находим в нем массивы, мапим
// Необходимо отформатировать объект так, чтобы все массивы
// с объектами, которые в нем содержатся превратились в массивы айдишников
// этих объектов
// {
//   directors: [{ _id: 123, name: 'Name1' }, { _id: 456, name: 'Name2' }], => directors: [123, 456]
//   countries: [{ _id: 321, name: 'Country1' }, { _id: 654, name: 'Country2' }] => [321, 654]
// }

const extractedIdsObj = (obj) => {
  const newObj = {}
  _forIn(obj, (value, key) => {
    if (Array.isArray(value)) {
      newObj[key] = extractIds(value)
    } else if (typeof value === 'object') {
      newObj[key] = obj[key] && obj[key]._id ? obj[key]._id : obj[key]
    } else {
      newObj[key] = value
    }
  })
  return newObj
}

const formDataFormatter = (data) => {
  if (data.cover instanceof File) {
    const cover = data.cover
    _unset(data, 'cover')
    const stringData = JSON.stringify(extractedIdsObj(data))
    const form = new FormData()
    form.append('cover', cover)
    form.append('data', stringData)
    return form
  }
  const sendData = extractedIdsObj(data)
  return { data: JSON.stringify(sendData) }
}

export {
  directorsFormatter,
  directorFormatter,
  extractIds,
  extractedIdsObj,
  formDataFormatter,
  formatDirectorsInObj,
  formatDirestorsInCollection,
  videoformatFormatter,
  videoformatsFormatter,
  formatVideoformatsInObj,
  formatVideoformatsInCollection
}
