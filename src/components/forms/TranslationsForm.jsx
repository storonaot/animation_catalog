import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchTranslations,
  createTranslation,
  removeTranslation
} from 'store/actions/translations'

import createValidation from 'utils/validator'
import { REQUIRED } from 'constants/validation'

import { TextField } from 'components/common'
import AdditionForm from './AdditionForm'

const FORM_FIELDS = [
  { id: 1, name: 'name', label: 'Озвучка', component: TextField }
]

type Props = {
  translations: Array,
  onRemoveTranslation: Function,
  onCreateTranslation: Function,
  onFetchTranslations: Function,
}

class TranslationsForm extends Component<Props> {
  componentDidMount() {
    const { translations, onFetchTranslations } = this.props
    if (!translations.length) onFetchTranslations()
  }

  render() {
    const {
      translations,
      onRemoveTranslation,
      onCreateTranslation
    } = this.props

    const validate = createValidation({
      name: [REQUIRED]
    })

    return (
      <AdditionForm
        formFields={FORM_FIELDS}
        sendData={onCreateTranslation}
        onRemoveTag={onRemoveTranslation}
        tags={translations}
        form="CountriesForm"
        validate={validate}
      />
    )
  }
}

const mapStateToProps = state => ({
  translations: state.translations
})

const mapDispatchToProps = dispatch => ({
  onFetchTranslations: () => {
    dispatch(fetchTranslations())
  },
  onCreateTranslation: (data) => {
    dispatch(createTranslation(data))
  },
  onRemoveTranslation: (id) => {
    dispatch(removeTranslation(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(TranslationsForm)
