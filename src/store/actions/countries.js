import { FETCH_COUNTRIES, CREATE_COUNTRY } from 'constants/actions'

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

const removeCountry = () => () => {
  console.log('removeCountry')
}

export { fetchCountries, createCountry, removeCountry }
