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
  const formatted = formatInArr(obj[key], formatter)
  return { ...obj, [key]: formatted }
}
const formatInCollection = (collection, key, formatter) =>
  collection.map(obj => formatInObj(obj, key, formatter))

export {
  directorFormatter,
  videoformatFormatter,
  formatInArr,
  formatInObj,
  formatInCollection
}
