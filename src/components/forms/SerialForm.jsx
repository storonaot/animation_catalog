import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, reset, isDirty } from 'redux-form'
import createValidation from 'utils/validator'
import {
  REQUIRED,
  STRING_MAX_LENGTH,
  STRING_MIN_LENGTH
} from 'constants/validation'
import {
  SERIAL_DESCRIPTION_MIN_LENGTH,
  SERIAL_DESCRIPTION_MAX_LENGTH
} from 'constants/index'

import { differenceBy as _differenceBy } from 'lodash'

import { fetchDirectors } from 'store/actions/directors'
import { fetchStudios } from 'store/actions/studios'
import { fetchCountries } from 'store/actions/countries'

import RaisedButton from 'material-ui/RaisedButton'
import {
  TextField,
  AutoCompleteWithTags,
  ImageUpload,
  Dialog
} from 'components/common'
import { Grid, Box } from 'components/grids/SerialFormGrid'

type Props = {
  initialize: Function,
  initialValues?: Object,
  handleSubmit: Function,
  sendData: Function,
  onFetchCountries: Function,
  countries: Array,
  selectedCountries: Array,
  onFetchDirectors: Function,
  directors: Array,
  selectedDirectors: Array,
  onFetchStudios: Function,
  studios: Array,
  selectedStudios: Array,
  dirty: boolean,
  showed: boolean,
  onClose: Function,
}

class SerialForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const {
      initialize,
      initialValues,
      onFetchCountries,
      countries,
      directors,
      studios,
      onFetchDirectors,
      onFetchStudios
    } = this.props

    if (!directors.length) onFetchDirectors()
    if (!studios.length) onFetchStudios()
    if (!countries.length) onFetchCountries()

    if (initialValues) initialize(initialValues)
    else initialize()
  }

  render() {
    const {
      handleSubmit,
      sendData,
      countries,
      selectedCountries,
      directors,
      selectedDirectors,
      studios,
      selectedStudios,
      dirty,
      showed,
      onClose
    } = this.props

    const filteredCountries = _differenceBy(countries, selectedCountries, '_id')
    const filteredDirectors = _differenceBy(directors, selectedDirectors, '_id')
    const filteredStudios = _differenceBy(studios, selectedStudios, '_id')

    return (
      <Dialog showed={showed} onClose={onClose}>
        <form onSubmit={handleSubmit(sendData)}>
          <Grid>
            <Box cover><Field name="cover" component={ImageUpload} /></Box>
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
            <Box countries>
              <Field
                component={AutoCompleteWithTags}
                fullWidth
                dataSource={filteredCountries}
                name="countries"
                floatingLabelText="Страны"
                tagsList={selectedCountries}
              />
            </Box>
            <Box directors>
              <Field
                component={AutoCompleteWithTags}
                fullWidth
                dataSource={filteredDirectors}
                name="directors"
                floatingLabelText="Режиссеры"
                tagsList={selectedDirectors}
              />
            </Box>
            <Box studios>
              <Field
                component={AutoCompleteWithTags}
                fullWidth
                dataSource={filteredStudios}
                name="studios"
                floatingLabelText="Студии"
                tagsList={selectedStudios}
              />
            </Box>
            <Box actions>
              <RaisedButton
                type="button"
                label="Отмениь"
                primary
                onClick={onClose}
                style={{ marginRight: 10 }}
              />
              <RaisedButton
                disabled={!dirty}
                type="submit"
                label="Сохранить"
                secondary
              />
            </Box>
          </Grid>
        </form>
      </Dialog>
    )
  }
}
const selector = formValueSelector('SerialForm')
const SerialFormRedux = reduxForm({
  form: 'SerialForm',
  validate: createValidation({
    name: [REQUIRED],
    originalName: [REQUIRED],
    countries: [REQUIRED],
    directors: [REQUIRED],
    description: [
      ({ description }) =>
        STRING_MAX_LENGTH({
          value: description,
          maxLength: SERIAL_DESCRIPTION_MAX_LENGTH
        }),
      ({ description }) =>
        STRING_MIN_LENGTH({
          value: description,
          minLength: SERIAL_DESCRIPTION_MIN_LENGTH
        })
    ]
  }),
  enableReinitialize: true
})(SerialForm)

const mapStateToProps = state => ({
  countries: state.countries,
  selectedCountries: selector(state, 'countries') || [],
  directors: state.directors,
  selectedDirectors: selector(state, 'directors') || [],
  studios: state.studios,
  selectedStudios: selector(state, 'studios') || [],
  dirty: isDirty('SerialForm')(state)
})

const mapDispatchToProps = dispatch => ({
  onFetchCountries: () => {
    dispatch(fetchCountries())
  },
  onFetchDirectors: () => {
    dispatch(fetchDirectors())
  },
  onFetchStudios: () => {
    dispatch(fetchStudios())
  },
  onReset: () => {
    dispatch(reset('SerialForm'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialFormRedux)
