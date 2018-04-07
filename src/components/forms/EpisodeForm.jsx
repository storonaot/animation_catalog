import { Component } from 'react'
import { connect } from 'react-redux'
import {
  Field,
  reduxForm,
  isDirty,
  FieldArray,
  formValueSelector
} from 'redux-form'
import { Grid, Box } from 'components/grids/EpisodeGrid'

import {
  Dialog,
  ImageUpload,
  TextField,
  AutoCompleteWithTags,
  DatePicker,
  TimePicker,
  Select,
  ImagesUpload,
  AutoComplete
} from 'components/common'
import RaisedButton from 'material-ui/RaisedButton'

import {
  INTEGER,
  REQUIRED,
  STRING_MAX_LENGTH,
  STRING_MIN_LENGTH
} from 'constants/validation'
import { DESCRIPTION_MIN_LENGTH, DESCRIPTION_MAX_LENGTH } from 'constants/index'

import { differenceBy as _differenceBy } from 'lodash'
import createValidation from 'utils/validator'

// actions
import { fetchLanguages } from 'store/actions/languages'
import { fetchTranslations } from 'store/actions/translations'
import { fetchVideoformats } from 'store/actions/videoformats'

type Props = {
  sendData: Function,
  onClose: Function,
  handleSubmit: Function,
  showed: boolean,
  dirty: boolean,
  languages: Array,
  translations: Array,
  videoformats: Array,
  selectedVideoformats: Array,
  onFetchLanguages: Function,
  onFetchTranslations: Function,
  onFetchVideoformats: Function,
  initialValues?: Object,
  initialize: Function,
  selectedLanguages: Array,
  selectedSubtitles: Array,
  translations: Array,
  selectedTranslations: Array,
}

class EpisodeForm extends Component<Props> {
  constructor (props) {
    super(props)
    this.state = {}
  }

  componentDidMount () {
    const {
      initialize,
      initialValues,
      languages,
      translations,
      videoformats,
      onFetchLanguages,
      onFetchTranslations,
      onFetchVideoformats
    } = this.props

    if (!languages.length) onFetchLanguages()
    if (!translations.length) onFetchTranslations()
    if (!videoformats.length) onFetchVideoformats()

    if (initialValues) initialize(initialValues)
    else initialize()
  }

  render () {
    const {
      sendData,
      showed,
      onClose,
      handleSubmit,
      dirty,
      videoformats,
      selectedVideoformats,
      languages,
      selectedLanguages,
      selectedSubtitles,
      translations,
      selectedTranslations
    } = this.props

    const filteredVideoformats = _differenceBy(
      videoformats,
      selectedVideoformats,
      '_id'
    )
    const filteredLanguages = _differenceBy(languages, selectedLanguages, '_id')
    const filteredSubtitles = _differenceBy(languages, selectedSubtitles, '_id')
    const filteredTranslations = _differenceBy(
      translations,
      selectedTranslations,
      '_id'
    )

    return (
      <Dialog showed={showed} onClose={onClose}>
        <form onSubmit={handleSubmit(sendData)}>
          <Grid>
            <Box cover>
              <Field name='cover' component={ImageUpload} />
            </Box>
            <Box number>
              <Field
                name='number'
                component={TextField}
                floatingLabelText='Номер эпизода'
              />
            </Box>
            <Box isName>
              <Field
                name='name'
                component={TextField}
                floatingLabelText='Название эпизода'
              />
            </Box>
            <Box originalName>
              <Field
                name='originalName'
                component={TextField}
                type='text'
                floatingLabelText='Оригинальное название эпизода'
              />
            </Box>
            <Box description>
              <Field
                name='description'
                component={TextField}
                type='text'
                floatingLabelText='Описание эпизода'
                multiLine
              />
            </Box>
            <Box langOriginal>
              <Field
                name='langOriginal'
                component={AutoComplete}
                floatingLabelText='Язык оригинала'
                dataSource={filteredLanguages}
              />
            </Box>
            <Box translations>
              <Field
                component={AutoCompleteWithTags}
                dataSource={filteredTranslations}
                name='translations'
                floatingLabelText='Переводы'
                tagsList={selectedTranslations}
              />
            </Box>
            <Box subtitles>
              <Field
                component={AutoCompleteWithTags}
                dataSource={filteredSubtitles}
                name='subtitles'
                floatingLabelText='Субтитры'
                tagsList={selectedSubtitles}
              />
            </Box>
            <Box releaseDate>
              <Field
                name='releaseDate'
                component={DatePicker}
                floatingLabelText='Дата выхода'
              />
            </Box>
            <Box timeTrack>
              <Field
                name='timeTrack'
                component={TimePicker}
                hintText='Длительность (h:m)'
              />
            </Box>
            <Box videoformat>
              <Field
                name='videoformat'
                component={Select}
                floatingLabelText='Формат видео'
                options={filteredVideoformats}
              />
            </Box>
            <Box sizeMb>
              <Field
                name='sizeMb'
                component={TextField}
                floatingLabelText='Размер в Mb'
                type='text'
              />
            </Box>
            <Box screens>
              <FieldArray name='screens' component={ImagesUpload} />
            </Box>
            <Box actions>
              <div>
                <RaisedButton
                  type='button'
                  label='Отменить'
                  primary
                  onClick={onClose}
                  style={{ marginRight: 10 }}
                />
                <RaisedButton
                  disabled={!dirty}
                  type='submit'
                  label='Сохранить'
                  secondary
                />
              </div>
            </Box>
          </Grid>
        </form>
      </Dialog>
    )
  }
}

const selector = formValueSelector('EpisodeForm')
const EpisodeFormRedux = reduxForm({
  form: 'EpisodeForm',
  validate: createValidation({
    number: [INTEGER, REQUIRED],
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
  }),
  enableReinitialize: true
})(EpisodeForm)

const mapStateToProps = state => ({
  languages: state.languages,
  selectedLanguages: selector(state, 'languages') || [],
  translations: state.translations,
  selectedTranslations: selector(state, 'translations') || [],
  videoformats: state.videoformats,
  selectedVideoformats: selector(state, 'videoformats') || [],
  selectedSubtitles: selector(state, 'subtitles') || [],
  dirty: isDirty('EpisodeForm')(state)
})

const mapDispatchToProps = dispatch => ({
  onFetchLanguages: () => {
    dispatch(fetchLanguages())
  },
  onFetchTranslations: () => {
    dispatch(fetchTranslations())
  },
  onFetchVideoformats: () => {
    dispatch(fetchVideoformats())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(EpisodeFormRedux)
