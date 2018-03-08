const source = 'http://localhost:3000'
const api = 'api/v1'

export const GET_SERIALS = `${source}/${api}/serials`
export const GET_SERIAL = id => `${source}/${api}/serials/${id}`

export const GET_COUNTRIES = `${source}/${api}/countries`

export const GET_DIRECTORS = `${source}/${api}/directors`
export const CREATE_DIRECTOR = `${source}/${api}/directors/new`
export const REMOVE_DIRECTOR = id => `${source}/${api}/directors/${id}`

export const GET_STUDIOS = `${source}/${api}/studios`
export const CREATE_STUDIO = `${source}/${api}/studios/new`
