import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { TextField, ImageUpload } from 'components/common'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Box } from 'components/grids/SeasonFormGrid'
import createValidation from 'utils/validator'
import { REQUIRED, INTEGER } from 'constants/validation'

type Props = {
  hideForm: Function,
  formType: string,
  initialize: Function,
  initialValues?: Object,
  handleSubmit: Function,
  sendData: Function,
}

class SeasonForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { initialize, formType, initialValues } = this.props

    if (formType === 'edit') {
      initialize(initialValues)
    } else if (formType === 'new') {
      initialize()
    }
  }

  render() {
    const { hideForm, handleSubmit, sendData } = this.props
    return (
      <form onSubmit={handleSubmit(sendData)}>
        <Grid>
          <Box cover>
            <Field name="cover" component={ImageUpload} />
          </Box>
          <Box number>
            <Field
              name="number"
              component={TextField}
              floatingLabelText="Номер сезона"
            />
          </Box>
          <Box isName>
            <Field
              name="name"
              component={TextField}
              floatingLabelText="Название сезона"
            />
          </Box>
          <Box controls>
            <RaisedButton type="submit" label="Сохранить" secondary />
            <RaisedButton
              type="button"
              onClick={hideForm}
              label="Отменить"
              primary
              style={{ marginLeft: 15 }}
            />
          </Box>
        </Grid>
      </form>
    )
  }
}

const SeasonFormRedux = reduxForm({
  form: 'SeasonForm',
  validate: createValidation({
    number: [REQUIRED, INTEGER]
  }),
  enableReinitialize: true
})(SeasonForm)

const mapStateToProps = state => ({
  initialValues: state.season
})

const mapDispatchToProps = dispatch => ({
  onReset: () => {
    dispatch(reset('SeasonForm'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SeasonFormRedux)
