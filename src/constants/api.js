export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
export const API = 'api/v1'

export const GET_SERIALS = '/serials'
export const GET_SERIAL = id => `/serials/${id}`
export const CREATE_SERIAL = '/serials/new'
export const UPDATE_SERIAL = id => `/serials/${id}`
export const REMOVE_SERIAL = id => `/serials/${id}`

export const GET_COUNTRIES = '/countries'
export const CREATE_COUNTRY = '/countries/new'

export const GET_DIRECTORS = '/directors'
export const CREATE_DIRECTOR = '/directors/new'
export const REMOVE_DIRECTOR = id => `/directors/${id}`

export const GET_STUDIOS = '/studios'
export const CREATE_STUDIO = '/studios/new'
export const REMOVE_STUDIO = id => `/studios/${id}`

export const REMOVE_IMAGE = id => `/images/${id}`
