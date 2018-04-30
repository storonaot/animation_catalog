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
      currentValue: { _id: 5, name: 'Язык' }
    }

    this.changeForm = this.changeForm.bind(this)
  }

  changeForm(value) {
    const currentValue = SELECT_OPTIONS.find(option => option._id === Number(value))

    this.setState({ currentValue })
  }

  render() {
    const { currentValue } = this.state
    return (
      <div>
        <Select
          options={SELECT_OPTIONS}
          input={{ onChange: this.changeForm, value: currentValue }}
          floatingLabelText="Выбрать форму"
          fullWidth={false}
          meta={{ touched: false }}
        />
        {currentValue._id === 1 && <DirectorsForm />}
        {currentValue._id === 2 && <CountriesForm />}
        {currentValue._id === 3 && <StudiosForm />}
        {currentValue._id === 4 && <TranslationsForm />}
        {currentValue._id === 5 && <LanguagesForm />}
      </div>
    )
  }
}

export default Addition
