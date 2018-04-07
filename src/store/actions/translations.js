import {
  FETCH_TRANSLATIONS,
  CREATE_TRANSLATION,
  REMOVE_TRANSLATION
} from 'constants/actions'

const fetchTranslations = () => (dispatch) => {
  dispatch({
    type: FETCH_TRANSLATIONS
  })
}

const createTranslation = data => (dispatch) => {
  dispatch({
    type: CREATE_TRANSLATION,
    payload: data
  })
}

const removeTranslation = id => (dispatch) => {
  dispatch({
    type: REMOVE_TRANSLATION,
    payload: id
  })
}

export { fetchTranslations, createTranslation, removeTranslation }
