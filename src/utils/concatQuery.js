const concatQuery = (base: string, query?: Object) => {
  if (query) {
    let resultUrl = `${base}?`
    Object.keys(query).forEach((item) => {
      resultUrl += `${item}=${query[item]}&`
    })

    return resultUrl
  }

  return base
}

export default concatQuery
