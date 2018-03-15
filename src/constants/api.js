export const SOURCE = 'http://localhost:3000'
const api = 'api/v1'

// export const UPLOADS = `${SOURCE}/uploads`

export const GET_SERIALS = `${SOURCE}/${api}/serials`
export const GET_SERIAL = id => `${SOURCE}/${api}/serials/${id}`
export const CREATE_SERIAL = `${SOURCE}/${api}/serials/new`
export const UPDATE_SERIAL = id => `${SOURCE}/${api}/serials/${id}`
export const DELETE_SERIAL = id => `${SOURCE}/${api}/serials/${id}`

export const GET_COUNTRIES = `${SOURCE}/${api}/countries`
export const CREATE_COUNTRY = `${SOURCE}/${api}/countries/new`

export const GET_DIRECTORS = `${SOURCE}/${api}/directors`
export const CREATE_DIRECTOR = `${SOURCE}/${api}/directors/new`
export const REMOVE_DIRECTOR = id => `${SOURCE}/${api}/directors/${id}`

export const GET_STUDIOS = `${SOURCE}/${api}/studios`
export const CREATE_STUDIO = `${SOURCE}/${api}/studios/new`
export const REMOVE_STUDIO = id => `${SOURCE}/${api}/studios/${id}`

export const REMOVE_IMAGE = id => `${SOURCE}/${api}/image/${id}`
