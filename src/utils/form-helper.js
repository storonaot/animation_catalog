import { forIn as _forIn, unset as _unset } from 'lodash'

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
  console.log('extractedIdsObj obj', obj)

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
    const { cover } = data
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

export { extractIds, extractedIdsObj, formDataFormatter }
