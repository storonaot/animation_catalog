import {
  FETCH_LANGUAGES,
  CREATE_LANGUAGE,
  REMOVE_LANGUAGE
} from 'constants/actions'

const fetchLanguage = () => (dispatch) => {
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

const removeLanguage = () => () => {
  console.log('removeLanguage', REMOVE_LANGUAGE)
}

export { fetchLanguage, createLanguage, removeLanguage }
