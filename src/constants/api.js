import concatQuery from 'utils/concatQuery'

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
export const REMOVE_COUNTRY = id => `/countries/${id}`

// translations
export const GET_TRANSLATIONS = '/translations'
export const CREATE_TRANSLATION = '/translations/new'
export const REMOVE_TRANSLATION = id => `/translations/${id}`

// videoformats
export const GET_VIDEOFORMATS = '/videoformats'
export const CREATE_VIDEOFORMAT = '/videoformats/new'
export const REMOVE_VIDEOFORMAT = id => `/videoformats/${id}`

// languages
export const GET_LANGUAGES = '/languages'
export const CREATE_LANGUAGE = '/languages/new'
export const REMOVE_LANGUAGE = id => `/languages/${id}`

// director
export const GET_DIRECTORS = '/directors'
export const CREATE_DIRECTOR = '/directors/new'
export const REMOVE_DIRECTOR = id => `/directors/${id}`

// studio
export const GET_STUDIOS = '/studios'
export const CREATE_STUDIO = '/studios/new'
export const REMOVE_STUDIO = id => `/studios/${id}`

// serial
// export const GET_SEASONS = serialId => `/seasons/${serialId}`
export const GET_SEASONS = serialId => `/serials/${serialId}/seasons`
export const GET_SEASON = seasonId => `/seasons/${seasonId}`
export const CREATE_SEASON = '/seasons/new'
export const UPDATE_SEASON = seasonId => `/seasons/${seasonId}`
export const REMOVE_SEASON = seasonId => `/seasons/${seasonId}`

// episode
export const GET_EPISODES = seasonId => `seasons/${seasonId}/episodes`
export const GET_EPISODE = episodeId => `/episodes/${episodeId}`
export const CREATE_EPISODE = '/episodes/new'
export const UPDATE_EPISODE = episodeId => `/episodes/${episodeId}`
export const REMOVE_EPISODE = episodeId => `/episodes/${episodeId}`

// dvds
export const GET_DVDS = '/dvds'
export const GET_DVD = id => `/dvds/${id}`
export const CREATE_DVD = '/dvds/new'
export const UPDATE_DVD = id => `/dvds/${id}`
export const REMOVE_DVD = id => `/dvds/${id}`

// films
export const GET_FILMS = query => concatQuery('/films', query)
export const GET_FILM = id => `/films/${id}`
export const CREATE_FILM = '/films/new'
export const UPDATE_FILM = id => `/films/${id}`
export const REMOVE_FILM = id => `/films/${id}`
export const CHANGE_FILM_MARK = id => `/films/${id}/mark`
