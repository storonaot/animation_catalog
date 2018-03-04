import { Component } from 'react'

import SerialForm from 'forms/SerialForm'

class SerialsNew extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return <SerialForm formType="new" />
  }
}

export default SerialsNew
