import { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchCountries,
  createCountry,
  removeCountry
} from 'store/actions/countries'

import createValidation from 'utils/validator'
import { REQUIRED } from 'constants/validation'

import { TextField } from 'components/common'
import AdditionForm from './AdditionForm'

const FORM_FIELDS = [
  { id: 1, name: 'name', label: 'Название страны', component: TextField },
  { id: 2, name: 'iso', label: 'ISO', component: TextField }
]

type Props = {
  countries: Array,
  onFetchCountries: Function,
  onCreateCountry: Function,
  onRemoveCountry: Function,
}

class CountriesForm extends Component<Props> {
  componentDidMount() {
    const { countries, onFetchCountries } = this.props
    if (!countries.length) onFetchCountries()
  }

  render() {
    const { countries, onRemoveCountry, onCreateCountry } = this.props

    const validate = createValidation({
      name: [REQUIRED],
      iso: [REQUIRED]
    })

    return (
      <AdditionForm
        formFields={FORM_FIELDS}
        sendData={onCreateCountry}
        onRemoveTag={onRemoveCountry}
        tags={countries}
        form="CountriesForm"
        validate={validate}
      />
    )
  }
}

const mapStateToProps = state => ({
  countries: state.countries
})

const mapDispatchToProps = dispatch => ({
  onFetchCountries: () => {
    dispatch(fetchCountries())
  },
  onCreateCountry: (data) => {
    dispatch(createCountry(data))
  },
  onRemoveCountry: (id) => {
    dispatch(removeCountry(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CountriesForm)
