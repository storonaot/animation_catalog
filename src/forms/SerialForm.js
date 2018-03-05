import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, reset } from 'redux-form'

import { fetchCountries } from 'store/actions/countries'

import RaisedButton from 'material-ui/RaisedButton'
import { TextField, AutoCompleteWithTags } from 'components/common'
import { Grid, Box } from 'components/grids/SerialFormGrid'

type Props = {
  formType: string,
  initialize: Function,
  initialValues?: Object,
  handleSubmit: Function,
  sendData: Function,
  onFetchCountries: Function,
  countries: Array,
  selectedCountries: Array,
}

class SerialForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { formType, initialize, initialValues, onFetchCountries } = this.props
    onFetchCountries()
    if (formType === 'edit') {
      initialize(initialValues)
    } else if (formType === 'new') {
      initialize()
    }
  }

  render() {
    const { handleSubmit, sendData, countries, selectedCountries } = this.props

    return (
      <form onSubmit={handleSubmit(sendData)}>
        <Grid>
          <Box cover><div>Cover</div></Box>
          <Box isName>
            <Field
              name="name"
              component={TextField}
              type="text"
              floatingLabelText="Название сериала"
              fullWidth
            />
          </Box>
          <Box originalName>
            <Field
              name="originalName"
              component={TextField}
              type="text"
              floatingLabelText="Оригинальное название сериала"
              fullWidth
            />
          </Box>
          <Box countries>
            <Field
              component={AutoCompleteWithTags}
              fullWidth
              dataSource={countries}
              name="countries"
              floatingLabelText="Страны"
              tagsList={selectedCountries}
              deleteTag={() => {}}
            />
          </Box>
          <Box directors>
            <Field
              component={AutoCompleteWithTags}
              fullWidth
              dataSource={[]}
              name="directors"
              floatingLabelText="Режиссеры"
              tagsList={[]}
              deleteTag={() => {}}
            />
          </Box>
          <Box studios>
            <Field
              component={AutoCompleteWithTags}
              fullWidth
              dataSource={[]}
              name="studios"
              floatingLabelText="Студии"
              tagsList={[]}
              deleteTag={() => {}}
            />
          </Box>
          <Box description>
            <Field
              name="description"
              component={TextField}
              type="text"
              floatingLabelText="Описание сериала"
              multiLine
              fullWidth
            />
          </Box>
        </Grid>
        <div>
          <RaisedButton type="submit" label="Сохранить" secondary />
        </div>
      </form>
    )
  }
}
const selector = formValueSelector('SerialForm')
const SerialFormRedux = reduxForm({
  form: 'SerialForm',
  enableReinitialize: true
})(SerialForm)

const mapStateToProps = state => ({
  initialValues: state.serial.data,
  countries: state.countries.data.map(({ _id, name, ...res }) => ({
    value: _id,
    label: name,
    ...res
  })),
  selectedCountries: selector(state, 'countries') || []
})

const mapDispatchToProps = dispatch => ({
  onFetchCountries: () => {
    dispatch(fetchCountries())
  },
  onReset: () => {
    dispatch(reset('SerialForm'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialFormRedux)
