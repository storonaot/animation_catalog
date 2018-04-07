import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, isDirty, FieldArray } from 'redux-form'
import { Grid, Box } from 'components/grids/EpisodeGrid'

import {
  Dialog,
  ImageUpload,
  TextField,
  AutoCompleteWithTags,
  AutoComplete,
  DatePicker,
  TimePicker,
  Select,
  ImagesUpload
} from 'components/common'
import RaisedButton from 'material-ui/RaisedButton'

import {
  INTEGER,
  REQUIRED,
  STRING_MAX_LENGTH,
  STRING_MIN_LENGTH
} from 'constants/validation'
import { DESCRIPTION_MIN_LENGTH, DESCRIPTION_MAX_LENGTH } from 'constants/index'

import createValidation from 'utils/validator'

type Props = {
  sendData: Function,
  onClose: Function,
  handleSubmit: Function,
  showed: boolean,
  dirty: boolean,
}

class EpisodeForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { sendData, showed, onClose, handleSubmit, dirty } = this.props
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
                floatingLabelText="Номер эпизода"
              />
            </Box>
            <Box isName>
              <Field
                name="name"
                component={TextField}
                floatingLabelText="Название эпизода"
              />
            </Box>
            <Box originalName>
              <Field
                name="originalName"
                component={TextField}
                type="text"
                floatingLabelText="Оригинальное название эпизода"
              />
            </Box>
            <Box description>
              <Field
                name="description"
                component={TextField}
                type="text"
                floatingLabelText="Описание эпизода"
                multiLine
              />
            </Box>
            <Box langOriginal>
              <Field
                name="langOriginal"
                component={AutoComplete}
                floatingLabelText="Язык оригинала"
                dataSource={[]}
              />
            </Box>
            <Box translations>
              <Field
                component={AutoCompleteWithTags}
                dataSource={[]}
                name="translations"
                floatingLabelText="Переводы"
                tagsList={[]}
              />
            </Box>
            <Box subtitles>
              <Field
                component={AutoCompleteWithTags}
                dataSource={[]}
                name="subtitles"
                floatingLabelText="Субтитры"
                tagsList={[]}
              />
            </Box>
            <Box releaseDate>
              <Field
                name="releaseDate"
                component={DatePicker}
                floatingLabelText="Дата выхода"
              />
            </Box>
            <Box timeTrack>
              <Field
                name="timeTrack"
                component={TimePicker}
                hintText="Длительность (h:m)"
              />
            </Box>
            <Box videoformat>
              <Field
                name="videoformat"
                component={Select}
                floatingLabelText="Формат видео"
                options={[]}
                currentValue={null}
                onChange={() => {}}
              />
            </Box>
            <Box sizeMb>
              <Field
                name="sizeMb"
                component={TextField}
                floatingLabelText="Размер в Mb"
                type="text"
              />
            </Box>
            <Box screens>
              <FieldArray name="screens" component={ImagesUpload} />
            </Box>
            <Box actions>
              <div>
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
              </div>
            </Box>
          </Grid>
        </form>
      </Dialog>
    )
  }
}

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
  dirty: isDirty('EpisodeForm')(state)
})

export default connect(mapStateToProps)(EpisodeFormRedux)

// season
// serial
// subtitles -> array
// translations -> array
// langOriginal -> required
// videoformat
