import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { TextField, TagsList } from 'components/common'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import HighlightOff from 'material-ui/svg-icons/action/highlight-off'
import { fetchStudios, createStudio, removeStudio } from 'store/actions'
import { Grid, Box } from 'components/grids/AdditionFormGrid'
import TextFieldMUI from 'material-ui/TextField'

type Props = {
  handleSubmit: Function,
  onFetchStudios: Function,
  onCreateStudio: Function,
  onRemoveStudio: Function,
  studios: Array<{ name: string }>,
}

class StudiosForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      substring: ''
    }

    this.updateSubstring = this.updateSubstring.bind(this)
    this.resetSubstring = this.resetSubstring.bind(this)
  }

  componentDidMount() {
    const { studios, onFetchStudios } = this.props
    if (!studios.length) onFetchStudios()
  }

  updateSubstring(event, value) {
    this.setState({ substring: value })
  }

  resetSubstring() {
    this.setState({ substring: '' })
  }

  render() {
    const { substring } = this.state
    const { handleSubmit, studios, onCreateStudio, onRemoveStudio } = this.props
    const filteredTags = studios.filter(({ name }) =>
      name.toLowerCase().match(substring.toLowerCase())
    )

    return (
      <form onSubmit={handleSubmit(onCreateStudio)}>
        <Grid>
          <Box left>
            <Field
              name="name"
              component={TextField}
              floatingLabelText="Название студии"
              fullWidth
              type="text"
            />
            <RaisedButton type="submit" label="Добавить" secondary />
          </Box>
          <Box right>
            <TextFieldMUI
              value={substring}
              onChange={this.updateSubstring}
              name="substring"
              floatingLabelText="Фильтр"
            />
            <IconButton tooltip="Очистить" onClick={this.resetSubstring}>
              <HighlightOff />
            </IconButton>
            <TagsList tags={filteredTags} deleteTag={onRemoveStudio} />
          </Box>
        </Grid>
      </form>
    )
  }
}

const StudiosFormRedux = reduxForm({
  form: 'StudiosForm'
})(StudiosForm)

const mapStateToProps = state => ({
  studios: state.studios
})

const mapDispatchToProps = dispatch => ({
  onFetchStudios: () => {
    dispatch(fetchStudios())
  },
  onCreateStudio: (data) => {
    dispatch(createStudio(data))
  },
  onRemoveStudio: (id) => {
    dispatch(removeStudio(id))
  },
  onReset: () => {
    dispatch(reset('StudiosForm'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudiosFormRedux)
