import axios from 'libs/axios'
import {
  GET_FILMS,
  GET_FILM,
  CREATE_FILM,
  UPDATE_FILM,
  REMOVE_FILM,
  CHANGE_FILM_MARK
} from 'constants/api'
import { onSuccess, onError } from './helpers'

const fetchFilms = query => axios.get(GET_FILMS(query)).then(onSuccess, onError)
const fetchFilm = id => axios.get(GET_FILM(id)).then(onSuccess, onError)
const createFilm = data => axios.post(CREATE_FILM, data).then(onSuccess, onError)
const updateFilm = (id, data) => axios.put(UPDATE_FILM(id), data).then(onSuccess, onError)
const removeFilm = id => axios.delete(REMOVE_FILM(id)).then(onSuccess, onError)
const changeFilmMark = (id, data) => axios.put(CHANGE_FILM_MARK(id), data).then(onSuccess, onError)

export default {
  fetchFilms,
  fetchFilm,
  createFilm,
  updateFilm,
  removeFilm,
  changeFilmMark
}
