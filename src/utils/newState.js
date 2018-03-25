const removeObjById = (oldState, id) => oldState.filter(item => item._id !== id)
const updateObjInCollection = (oldState, newObj) =>
  oldState.map((item) => {
    if (item._id === newObj._id) return newObj
    return item
  })

export { removeObjById, updateObjInCollection }
