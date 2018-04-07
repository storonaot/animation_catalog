import {
  FETCH_LANGUAGES,
  CREATE_LANGUAGE,
  REMOVE_LANGUAGE
} from 'constants/actions'

const fetchLanguages = () => (dispatch) => {
  dispatch({
    type: FETCH_LANGUAGES
  })
}

const createLanguage = data => (dispatch) => {
  dispatch({
    type: CREATE_LANGUAGE,
    payload: data
  })
}

const removeLanguage = id => (dispatch) => {
  dispatch({
    type: REMOVE_LANGUAGE,
    payload: id
  })
}

export { fetchLanguages, createLanguage, removeLanguage }
