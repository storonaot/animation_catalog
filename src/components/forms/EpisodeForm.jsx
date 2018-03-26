import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, isDirty } from 'redux-form'

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
          <Field name="cover" component={ImageUpload} />
          <Field
            name="number"
            component={TextField}
            floatingLabelText="Номер эпизода"
          />
          <Field
            name="name"
            component={TextField}
            floatingLabelText="Название эпизода"
          />
          <Field
            name="originalName"
            component={TextField}
            type="text"
            floatingLabelText="Оригинальное название эпизода"
          />
          <Field
            name="description"
            component={TextField}
            type="text"
            floatingLabelText="Описание эпизода"
            multiLine
          />
          <Field
            name="number"
            component={TextField}
            floatingLabelText="Размер в мегабайтах"
          />
          <Field
            component={AutoCompleteWithTags}
            dataSource={[]}
            name="subtitles"
            floatingLabelText="Субтитры"
            tagsList={[]}
          />
          <Field
            component={AutoCompleteWithTags}
            dataSource={[]}
            name="translations"
            floatingLabelText="Переводы"
            tagsList={[]}
          />
          <Field
            name="releaseDate"
            component={DatePicker}
            floatingLabelText="Дата выхода"
          />
          <Field
            name="lengthMs"
            component={TimePicker}
            floatingLabelText="Длительность"
          />
          <Field
            name="langOriginal"
            component={AutoComplete}
            floatingLabelText="Язык оригинала"
            dataSource={[]}
          />
          <Field
            name="videoformat"
            component={Select}
            floatingLabelText="Формат видео"
            options={[]}
            currentValue={null}
            onChange={() => {}}
          />
          <Field name="screens" component={ImagesUpload} />
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
