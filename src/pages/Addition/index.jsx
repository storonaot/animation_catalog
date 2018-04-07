import { Component } from 'react'
import DirectorsForm from 'components/forms/DirectorsForm'
import StudiosForm from 'components/forms/StudiosForm'
import CountriesForm from 'components/forms/CountriesForm'
import TranslationsForm from 'components/forms/TranslationsForm'
import LanguagesForm from 'components/forms/LanguagesForm'

import { Select } from 'components/common'

const SELECT_OPTIONS = [
  { _id: 1, name: 'Режиссер' },
  { _id: 2, name: 'Страна' },
  { _id: 3, name: 'Студия' },
  { _id: 4, name: 'Озвучка' },
  { _id: 5, name: 'Язык' }
]

class Addition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: 5
    }

    this.changeForm = this.changeForm.bind(this)
  }

  changeForm(value) {
    this.setState({ currentValue: value })
  }

  render() {
    const { currentValue } = this.state
    return (
      <div>
        <Select
          options={SELECT_OPTIONS}
          input={{ onChange: this.changeForm, value: currentValue }}
          floatingLabelText="Выбрать форму"
        />
        {currentValue === 1 && <DirectorsForm />}
        {currentValue === 2 && <CountriesForm />}
        {currentValue === 3 && <StudiosForm />}
        {currentValue === 4 && <TranslationsForm />}
        {currentValue === 5 && <LanguagesForm />}
      </div>
    )
  }
}

export default Addition
