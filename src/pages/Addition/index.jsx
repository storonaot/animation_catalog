import { Component } from 'react'
import DirectorsForm from 'components/forms/DirectorsForm'
import StudiosForm from 'components/forms/StudiosForm'
import { Select } from 'components/common'

const SELECT_OPTIONS = [
  { value: 1, label: 'Режиссер' },
  { value: 2, label: 'Страна' },
  { value: 3, label: 'Студия' }
]

class Addition extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentValue: 3
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
        {currentValue === 2 && <div>Страна</div>}
        {currentValue === 3 && <StudiosForm />}
      </div>
    )
  }
}

export default Addition
