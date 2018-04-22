import { Component } from 'react'
import { connect } from 'react-redux'
import { differenceBy as _differenceBy } from 'lodash'
import createValidation from 'utils/validator'
import { Field, reduxForm, isDirty, formValueSelector } from 'redux-form'
// import { Grid, Box } from 'components/grids/FilmGrid'

import {
  Dialog,
  ImageUpload,
  TextField,
  AutoComplete,
  AutoCompleteWithTags,
  DatePicker,
  TimePicker,
  Select
} from 'components/common'
import RaisedButton from 'material-ui/RaisedButton'

import { INTEGER, REQUIRED, STRING_MAX_LENGTH, STRING_MIN_LENGTH } from 'constants/validation'
import { DESCRIPTION_MIN_LENGTH, DESCRIPTION_MAX_LENGTH } from 'constants/index'

import { fetchLanguages } from 'store/actions/languages'
import { fetchTranslations } from 'store/actions/translations'
import { fetchDirectors } from 'store/actions/directors'
import { fetchCountries } from 'store/actions/countries'
import { fetchStudios } from 'store/actions/studios'
import { fetchVideoformats } from 'store/actions/videoformats'
// import { fetchDvds } from 'store/actions/dvds'

type Props = {
  showed: boolean,
  onClose: Function,
  handleSubmit: Function,
  sendData: Function,
  languages: Array,
  onFetchLanguages: Function,
  translations: Array,
  selectedTranslations: Array,
  onFetchTranslations: Function,
  selectedSubtitles: Array,
  directors: Array,
  selectedDirectors: Array,
  onFetchDirectors: Function,
  countries: Array,
  selectedCountries: Array,
  onFetchCountries: Function,
  studios: Array,
  selectedStudios: Array,
  onFetchStudios: Function,
  videoformats: Array,
  onFetchVideoformats: Function,
  dvds: Array,
  selectedDvds: Array,
  dirty: boolean
}

class FilmForm extends Component<Props> {
  componentDidMount() {
    const {
      languages,
      onFetchLanguages,
      translations,
      onFetchTranslations,
      directors,
      onFetchDirectors,
      countries,
      onFetchCountries,
      studios,
      onFetchStudios,
      videoformats,
      onFetchVideoformats
    } = this.props
    if (!languages.length) onFetchLanguages()
    if (!translations.length) onFetchTranslations()
    if (!directors.length) onFetchDirectors()
    if (!countries.length) onFetchCountries()
    if (!studios.length) onFetchStudios()
    if (!videoformats.length) onFetchVideoformats()
  }

  render() {
    const {
      showed,
      onClose,
      handleSubmit,
      sendData,
      languages,
      translations,
      selectedTranslations,
      selectedSubtitles,
      directors,
      selectedDirectors,
      countries,
      selectedCountries,
      studios,
      selectedStudios,
      videoformats,
      dvds,
      selectedDvds,
      dirty
    } = this.props
    const filteredTranslations = _differenceBy(translations, selectedTranslations, '_id')
    const filteredSubtitles = _differenceBy(languages, selectedSubtitles, '_id')
    const filteredDirectors = _differenceBy(directors, selectedDirectors, '_id')
    const filteredCountries = _differenceBy(countries, selectedCountries, '_id')
    const filteredStudios = _differenceBy(studios, selectedStudios, '_id')
    const filteredDvds = _differenceBy(dvds, selectedDvds, '_id')

    return (
      <Dialog showed={showed} onClose={onClose}>
        <form onSubmit={handleSubmit(sendData)}>
          <Field name="cover" component={ImageUpload} />
          <Field name="name" component={TextField} floatingLabelText="Название фильма" />
          <Field
            name="originalName"
            component={TextField}
            type="text"
            floatingLabelText="Оригинальное название фильма"
          />
          <Field
            name="description"
            component={TextField}
            type="text"
            floatingLabelText="Описание эпизода"
            multiLine
          />
          <Field
            name="langOriginal"
            component={AutoComplete}
            floatingLabelText="Язык оригинала"
            dataSource={languages}
          />
          <Field
            component={AutoCompleteWithTags}
            dataSource={filteredTranslations}
            name="translations"
            floatingLabelText="Переводы"
            tagsList={selectedTranslations}
          />
          <Field
            component={AutoCompleteWithTags}
            dataSource={filteredSubtitles}
            name="subtitles"
            floatingLabelText="Субтитры"
            tagsList={selectedSubtitles}
          />
          <Field
            component={AutoCompleteWithTags}
            dataSource={filteredDirectors}
            name="directors"
            floatingLabelText="Режиссеры"
            tagsList={selectedDirectors}
          />
          <Field
            component={AutoCompleteWithTags}
            dataSource={filteredCountries}
            name="countries"
            floatingLabelText="Страны"
            tagsList={selectedCountries}
          />
          <Field
            component={AutoCompleteWithTags}
            dataSource={filteredStudios}
            name="studios"
            floatingLabelText="Студии"
            tagsList={selectedStudios}
          />
          <Field name="releaseDate" component={DatePicker} floatingLabelText="Дата выхода" />
          <Field name="timeTrack" component={TimePicker} hintText="Длительность (h:m)" />
          <Field
            name="videoformat"
            component={Select}
            floatingLabelText="Формат видео"
            options={videoformats}
          />
          <Field name="sizeMb" component={TextField} floatingLabelText="Размер в Mb" type="text" />
          <Field
            component={AutoCompleteWithTags}
            dataSource={filteredDvds}
            name="inDvd"
            floatingLabelText="DVD"
            tagsList={selectedDvds}
          />
          {/* <FieldArray name="screens" component={ImagesUpload} /> */}
          <div>
            <RaisedButton
              type="button"
              label="Отменить"
              primary
              onClick={onClose}
              style={{ marginRight: 10 }}
            />
            <RaisedButton disabled={!dirty} type="submit" label="Сохранить" secondary />
          </div>
        </form>
      </Dialog>
    )
  }
}

const selector = formValueSelector('FilmForm')

const FilmFormRedux = reduxForm({
  form: 'FilmForm',
  validate: createValidation({
    name: [REQUIRED],
    originalName: [REQUIRED],
    description: [
      ({ description }) =>
        STRING_MAX_LENGTH({
          value: description,
          maxLength: DESCRIPTION_MAX_LENGTH
        }),
      ({ description }) =>
        STRING_MIN_LENGTH({
          value: description,
          minLength: DESCRIPTION_MIN_LENGTH
        })
    ],
    sizeMb: [INTEGER, REQUIRED],
    timeTrack: [REQUIRED],
    releaseDate: [REQUIRED],
    langOriginal: [REQUIRED]
  })
})(FilmForm)

const mapStateToProps = state => ({
  languages: state.languages,
  translations: state.translations,
  selectedTranslations: selector(state, 'translations') || [],
  selectedSubtitles: selector(state, 'subtitles') || [],
  directors: state.directors,
  selectedDirectors: selector(state, 'directors') || [],
  countries: state.countries,
  selectedCountries: selector(state, 'countries') || [],
  studios: state.studios,
  selectedStudios: selector(state, 'studios') || [],
  videoformats: state.videoformats,
  // DVDs: state.DVDs,
  dvds: [],
  // selectedDVDs: selector(state, 'DVDs') || []
  selectedDvds: [],
  dirty: isDirty('FilmForm')(state)
})
const mapDispatchToProps = dispatch => ({
  onFetchLanguages: () => {
    dispatch(fetchLanguages())
  },
  onFetchTranslations: () => {
    dispatch(fetchTranslations())
  },
  onFetchDirectors: () => {
    dispatch(fetchDirectors())
  },
  onFetchCountries: () => {
    dispatch(fetchCountries())
  },
  onFetchStudios: () => {
    dispatch(fetchStudios())
  },
  onFetchVideoformats: () => {
    dispatch(fetchVideoformats())
  }
  // onFetchDvds: () => {
  //   dispatch(fetchDvds())
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmFormRedux)

// +name -> required
// +originalName -> required
// +description -> 5 - 5000 chars
// +releaseDate -> date, required
// +timeTrack -> number, required
// +sizeMb -> number
// +cover
// +inDvd
// +screens
// +subtitles
// +langOriginal
// +translations
// +directors
// +countries
// +studios
// +videoformat -> required
