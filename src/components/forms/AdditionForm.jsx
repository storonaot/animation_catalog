import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'

import { showDialog } from 'store/actions/ui'

import { TagsList } from 'components/common'

import { Grid, Box } from 'components/grids/AdditionFormGrid'
import RaisedButton from 'material-ui/RaisedButton'
import TextFieldMUI from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'
import HighlightOff from 'material-ui/svg-icons/action/highlight-off'

type Props = {
  handleSubmit: Function,
  sendData: Function,
  formFields: Array,
  onRemoveTag: Function,
  tags: Array,
  filterFunc: Function,
  form: string,
  onReset: Function,
  onShowDialog: Function,
}

class AdditionForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      substring: ''
    }

    this.updateSubstring = this.updateSubstring.bind(this)
    this.resetSubstring = this.resetSubstring.bind(this)
    this.sendData = this.sendData.bind(this)
    this.showDialog = this.showDialog.bind(this)
  }

  updateSubstring(event, value) {
    this.setState({ substring: value })
  }

  resetSubstring() {
    this.setState({ substring: '' })
  }

  sendData(data) {
    const { sendData, form, onReset } = this.props
    sendData(data)
    onReset(form)
  }

  showDialog(id) {
    const { onShowDialog, onRemoveTag, tags } = this.props
    const name = tags.find(tag => tag._id === id).name
    onShowDialog({
      title: 'Удаление',
      message: `Вы уверены что хотите удалить ${name}?`,
      onSuccess: () => onRemoveTag(id)
    })
  }

  render() {
    const { handleSubmit, formFields, tags, filterFunc } = this.props

    const { substring } = this.state

    const filteredTags = tags.filter(filterFunc(substring))
    return (
      <form onSubmit={handleSubmit(this.sendData)}>
        <Grid>
          <Box left>
            {formFields.map(({ name, label, id, component }) => (
              <Field
                key={id}
                name={name}
                component={component}
                floatingLabelText={label}
                fullWidth
                type="text"
              />
            ))}
            <RaisedButton type="submit" label="Добавить" secondary />
          </Box>
          <Box right>
            <TextFieldMUI
              value={substring}
              onChange={this.updateSubstring}
              name="substring"
              floatingLabelText="Фильтр"
            />
            <IconButton
              disabled={!substring}
              tooltip="Очистить"
              onClick={this.resetSubstring}
            >
              <HighlightOff />
            </IconButton>
            <TagsList tags={filteredTags} deleteTag={this.showDialog} />
          </Box>
        </Grid>
      </form>
    )
  }
}

AdditionForm.defaultProps = {
  filterFunc: substring => ({ name }) =>
    name.toLowerCase().match(substring.toLowerCase())
}

const AdditionFormRedux = reduxForm()(AdditionForm)

const mapDispatchToProps = dispatch => ({
  onReset: (formName) => {
    dispatch(reset(formName))
  },
  onShowDialog: (data) => {
    dispatch(showDialog(data))
  }
})

export default connect(null, mapDispatchToProps)(AdditionFormRedux)
