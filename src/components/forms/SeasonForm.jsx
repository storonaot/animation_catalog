import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset, isDirty } from 'redux-form'
import { TextField, ImageUpload, Dialog } from 'components/common'
import RaisedButton from 'material-ui/RaisedButton'
import { Grid, Box } from 'components/grids/SeasonFormGrid'
import createValidation from 'utils/validator'
import { REQUIRED, INTEGER } from 'constants/validation'

type Props = {
  initialize: Function,
  initialValues?: Object,
  handleSubmit: Function,
  sendData: Function,
  showed: boolean,
  onClose: Function,
  dirty: boolean,
}

class SeasonForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { initialize, initialValues } = this.props
    if (initialValues) initialize(initialValues)
    else initialize()
  }

  render() {
    const { handleSubmit, sendData, showed, onClose, dirty } = this.props
    return (
      <Dialog showed={showed} onClose={onClose}>
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
            <Box actions>
              <RaisedButton
                type="button"
                onClick={onClose}
                label="Отменить"
                primary
              />
              <RaisedButton
                disabled={!dirty}
                type="submit"
                label="Сохранить"
                secondary
                style={{ marginLeft: 15 }}
              />
            </Box>
          </Grid>
        </form>
      </Dialog>
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
  dirty: isDirty('SeasonForm')(state)
})

const mapDispatchToProps = dispatch => ({
  onReset: () => {
    dispatch(reset('SeasonForm'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SeasonFormRedux)
