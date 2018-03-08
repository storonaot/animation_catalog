import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { TextField, TagsList } from 'components/common'
import RaisedButton from 'material-ui/RaisedButton'
import IconButton from 'material-ui/IconButton'
import HighlightOff from 'material-ui/svg-icons/action/highlight-off'
import { fetchStudios, createStudio } from 'store/actions'
import { Grid, Box } from 'components/grids/AdditionFormGrid'
import TextFieldMUI from 'material-ui/TextField'

type Props = {
  handleSubmit: Function,
  onFetchStudios: Function,
  studios: Array<{ name: string }>,
}

class StudiosForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      substring: ''
    }

    this.updateSubstring = this.updateSubstring.bind(this)
    // this.sendData = this.sendData.bind(this)
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

  // sendData(value) {
  //   console.log('sendData', value)
  //   // const data = {
  //   //   name: {
  //   //     first: value.first,
  //   //     last: value.last
  //   //   },
  //   //   originalName: {
  //   //     first: value.firstOriginal,
  //   //     last: value.lastOriginal
  //   //   }
  //   // }
  //   // this.props.onCreateDirector(data)
  //   // this.props.onReset()
  // }

  render() {
    const { substring } = this.state
    const { handleSubmit, studios, onCreateStudio } = this.props
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
            <TagsList tags={filteredTags} deleteTag={() => {}} />
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
  studios: state.studios.data
})

const mapDispatchToProps = dispatch => ({
  onFetchStudios: () => {
    dispatch(fetchStudios())
  },
  onCreateStudio: (data) => {
    dispatch(createStudio(data))
  },
  onReset: () => {
    dispatch(reset('StudiosForm'))
  }
  // onCreateDirector: (data: Object) => {
  //   dispatch(createDirector(data))
  // },
  // onRemoveDirector: (id) => {
  //   dispatch(removeDirector(id))
  // },
  // onReset: () => {
  //   dispatch(reset('DirectorsForm'))
  // }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudiosFormRedux)
