import {
  FETCH_COUNTRIES,
  CREATE_COUNTRY,
  REMOVE_COUNTRY
} from 'constants/actions'

const fetchCountries = () => (dispatch) => {
  dispatch({
    type: FETCH_COUNTRIES
  })
}

const createCountry = data => (dispatch) => {
  dispatch({
    type: CREATE_COUNTRY,
    payload: data
  })
}

const removeCountry = id => (dispatch) => {
  dispatch({
    type: REMOVE_COUNTRY,
    payload: id
  })
}

export { fetchCountries, createCountry, removeCountry }
