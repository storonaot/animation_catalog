import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, isDirty } from 'redux-form'

import {
  Dialog,
  ImageUpload,
  TextField,
  AutoCompleteWithTags
} from 'components/common'

type Props = {
  sendData: Function,
  onClose: Function,
  handleSubmit: Function,
  showed: boolean,
}

class EpisodeForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { sendData, showed, onClose, handleSubmit } = this.props
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
// subtitles -> массив
// translations -> массив

// const EpisodeShema = new Schema(
//   {
//     releaseDate: {
//       type: Date,
//       required: true
//     },
//     lengthMs: {
//       type: Number,
//       required: true,
//       min: 0
//     },
//     screens: [{ type: Schema.ObjectId, ref: 'Image' }], // скриншоты
//     langOriginal: { type: Schema.ObjectId, ref: 'Language' }, // язык оригинала
//     translations: [{ type: Schema.ObjectId, ref: 'Translation' }], // авторские переводы
//     directors: [{ type: Schema.ObjectId, ref: 'Director' }], // режиссеры для к/м и полного метра
//     countries: [{ type: Schema.ObjectId, ref: 'Country' }], // страны для к/м и полного метра
//     studios: [{ type: Schema.ObjectId, ref: 'Studio' }], // студии для к/м и полного метра
//     videoformat: {
//       type: Schema.ObjectId,
//       ref: 'Videoformat',
//       required: true
//     }
//   },
//   { collection: 'episode' }
// )
