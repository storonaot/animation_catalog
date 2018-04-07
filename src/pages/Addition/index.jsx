import { Component } from 'react'
import DirectorsForm from 'components/forms/DirectorsForm'
import StudiosForm from 'components/forms/StudiosForm'
import CountriesForm from 'components/forms/CountriesForm'
import TranslationsForm from 'components/forms/TranslationsForm'

import { Select } from 'components/common'

const SELECT_OPTIONS = [
  { value: 1, label: 'Режиссер' },
  { value: 2, label: 'Страна' },
  { value: 3, label: 'Студия' },
  { value: 4, label: 'Озвучка' }
]

class Addition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: 4
    }

    this.changeForm = this.changeForm.bind(this)
  }

  changeForm(event, index, value) {
    this.setState({ currentValue: value })
  }

  render() {
    const { currentValue } = this.state
    return (
      <div>
        <Select
          options={SELECT_OPTIONS}
          onChange={this.changeForm}
          currentValue={currentValue}
          floatingLabelText="Выбрать форму"
        />
        {currentValue === 1 && <DirectorsForm />}
        {currentValue === 2 && <CountriesForm />}
        {currentValue === 3 && <StudiosForm />}
        {currentValue === 4 && <TranslationsForm />}
      </div>
    )
  }
}

export default Addition
