import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'

class UserForm extends React.Component {
  constructor(props) {
    super(props)
    this.submit = this.submit.bind(this)
  }

  submit(form) {
    console.log('submit', form)
  }

  render() {
    const { handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit(this.submit)}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <Field name="firstName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <Field name="lastName" component="input" type="text" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="text" />
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

const UserFormRedux = reduxForm({
  form: 'UserForm'
})(UserForm)

function mapStateToProps(state, ownProps) {
  return {
    initialValues: state.user,
    ownProps: state.user
  }
}

export default connect(mapStateToProps)(UserFormRedux)
