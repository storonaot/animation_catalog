import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchLanguages,
  createLanguage,
  removeLanguage
} from 'store/actions/languages'

import createValidation from 'utils/validator'
import { REQUIRED } from 'constants/validation'

import { TextField } from 'components/common'
import AdditionForm from './AdditionForm'

const FORM_FIELDS = [
  { id: 1, name: 'name', label: 'Язык', component: TextField }
]

type Props = {
  languages: Array,
  onFetchLanguages: Function,
  onCreateLanguage: Function,
  onRemoveLanguage: Function,
}

class LanguagesForm extends Component<Props> {
  componentDidMount() {
    const { languages, onFetchLanguages } = this.props
    if (!languages.length) onFetchLanguages()
  }

  render() {
    const { languages, onRemoveLanguage, onCreateLanguage } = this.props

    const validate = createValidation({
      name: [REQUIRED]
    })

    return (
      <AdditionForm
        formFields={FORM_FIELDS}
        sendData={onCreateLanguage}
        onRemoveTag={onRemoveLanguage}
        tags={languages}
        form="CountriesForm"
        validate={validate}
      />
    )
  }
}

const mapStateToProps = state => ({ languages: state.languages })
const mapDispatchToProps = dispatch => ({
  onFetchLanguages: () => {
    dispatch(fetchLanguages())
  },
  onCreateLanguage: (data) => {
    dispatch(createLanguage(data))
  },
  onRemoveLanguage: (id) => {
    dispatch(removeLanguage(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(LanguagesForm)
