import { forIn as _forIn, unset as _unset } from 'lodash'

const directorFormatter = ({ name, originalName, ...res }) => ({
  name: `${name.first || ''} ${name.last}`,
  originalName: `${originalName.first || ''} ${originalName.last}`,
  ...res
})
const directorsFormatter = directors => directors.map(directorFormatter)

const extractIds = arr => arr.map(({ _id }) => _id)
// перебираем объект, находим в нем массивы, мапим
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
  formDataFormatter
}
