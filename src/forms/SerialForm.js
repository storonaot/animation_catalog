import { Component } from 'react'

import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

import { TextField } from 'components/common'

type Props = {
  formType: string,
  initialize: Function,
  initialValues?: Object,
}

class SerialForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { formType, initialize, initialValues } = this.props
    if (formType === 'edit') {
      initialize(initialValues)
    } else if (formType === 'new') {
      initialize()
    }
  }

  render() {
    console.log('this.props', this.props)
    return (
      <form>
        <div>Cover</div>
        <Field
          name="name"
          component={TextField}
          type="text"
          floatingLabelText="Название сериала"
        />
        <Field
          name="originalName"
          component={TextField}
          type="text"
          floatingLabelText="Оригинальное название сериала"
        />
      </form>
    )
  }
}

const SerialFormRedux = reduxForm({
  form: 'SerialForm',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(SerialForm)

const mapStateToProps = state => ({
  initialValues: state.serial.data
})

export default connect(mapStateToProps)(SerialFormRedux)
