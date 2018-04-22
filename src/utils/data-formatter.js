const directorFormatter = ({ name, originalName, ...rest }) => ({
  name: `${name.first || ''} ${name.last}`,
  originalName: `${originalName.first || ''} ${originalName.last}`,
  ...rest
})

const videoformatFormatter = ({ name, format, ...rest }) => ({
  name: `${format} ${name}`,
  ...rest
})

const formatInArr = (arr, formatter) => arr.map(formatter)
const formatInObj = (obj, key, formatter) => {
  // if we have array
  if (typeof obj[key] === 'object' && Array.isArray(obj[key])) {
    const formatted = formatInArr(obj[key], formatter)
    return { ...obj, [key]: formatted }
  }

  // if we have object
  return { ...obj, [key]: formatter(obj[key]) }
}

const formatInObjByParameters = (obj, keys, formatters) => {
  let resultObject = null
  keys.forEach((key, i) => {
    const mediateObject = resultObject || obj
    resultObject = formatInObj(mediateObject, key, formatters[i])
  })
  return resultObject
}

const formatInCollection = (collection, key, formatter) =>
  collection.map(obj => formatInObj(obj, key, formatter))

const formatInCollectionByParameters = (collection, keys, formatters) => {
  let resultCollection = null
  keys.forEach((key, i) => {
    const mediateCollection = resultCollection || collection
    resultCollection = formatInCollection(mediateCollection, key, formatters[i])
  })

  return resultCollection
}

export {
  directorFormatter,
  videoformatFormatter,
  formatInArr,
  formatInObj,
  formatInCollection,
  formatInCollectionByParameters,
  formatInObjByParameters
}
