export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
export const API = 'api/v1'

export const GET_SERIALS = '/serials'
export const GET_SERIAL = serialId => `/serials/${serialId}`
export const CREATE_SERIAL = '/serials/new'
export const UPDATE_SERIAL = serialId => `/serials/${serialId}`
export const REMOVE_SERIAL = serialId => `/serials/${serialId}`

export const GET_COUNTRIES = '/countries'
export const CREATE_COUNTRY = '/countries/new'

export const GET_DIRECTORS = '/directors'
export const CREATE_DIRECTOR = '/directors/new'
export const REMOVE_DIRECTOR = directorId => `/directors/${directorId}`

export const GET_STUDIOS = '/studios'
export const CREATE_STUDIO = '/studios/new'
export const REMOVE_STUDIO = studioId => `/studios/${studioId}`

export const GET_SEASONS = serialId => `/seasons/${serialId}`
export const CREATE_SEASON = '/seasons/new'
export const UPDATE_SEASON = seasonId => `/seasons/${seasonId}`
export const REMOVE_SEASON = seasonId => `/seasons/${seasonId}`
