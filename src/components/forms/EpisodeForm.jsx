import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, isDirty } from 'redux-form'
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
              <Field name="screens" component={ImagesUpload} />
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
  enableReinitialize: true
})(EpisodeForm)

const mapStateToProps = state => ({
  dirty: isDirty('EpisodeForm')(state)
})

export default connect(mapStateToProps)(EpisodeFormRedux)

// cover
// number -> integer
// name -> required
// originalName -> required
// description -> 5 - 5000 length
// sizeMb -> integer
// season
// serial
// subtitles -> array
// translations -> array
// releaseDate -> date required
// lengthMs -> format to ms required
// langOriginal -> required
// videoformat
// screens -> array
