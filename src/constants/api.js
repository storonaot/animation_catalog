export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000'
export const API = 'api/v1'

// serial
export const GET_SERIALS = '/serials'
export const GET_SERIAL = serialId => `/serials/${serialId}`
export const CREATE_SERIAL = '/serials/new'
export const UPDATE_SERIAL = serialId => `/serials/${serialId}`
export const REMOVE_SERIAL = serialId => `/serials/${serialId}`

// country
export const GET_COUNTRIES = '/countries'
export const CREATE_COUNTRY = '/countries/new'

// director
export const GET_DIRECTORS = '/directors'
export const CREATE_DIRECTOR = '/directors/new'
export const REMOVE_DIRECTOR = directorId => `/directors/${directorId}`

// studio
export const GET_STUDIOS = '/studios'
export const CREATE_STUDIO = '/studios/new'
export const REMOVE_STUDIO = studioId => `/studios/${studioId}`

// serial
export const GET_SEASONS = serialId => `/seasons/${serialId}`
export const GET_SEASON = seasonId => `/seasons/${seasonId}/show`
export const CREATE_SEASON = '/seasons/new'
export const UPDATE_SEASON = seasonId => `/seasons/${seasonId}`
export const REMOVE_SEASON = seasonId => `/seasons/${seasonId}`

// episode
export const GET_EPISODES = seasonId => `/episodes/${seasonId}`
export const GET_EPISODE = episodeId => `/episodes/${episodeId}/show`
export const CREATE_EPISODE = '/episodes/new'
export const UPDATE_EPISODE = episodeId => `/episodes/${episodeId}`
export const REMOVE_EPISODE = episodeId => `/episodes/${episodeId}`
