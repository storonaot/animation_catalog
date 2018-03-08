import { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form'
import { TextField, TagsList } from 'components/common'
import RaisedButton from 'material-ui/RaisedButton'
import { fetchDirectors, createDirector, removeDirector } from 'store/actions'
import { Grid, Box } from 'components/grids/DirectorsForm'
import TextFieldMUI from 'material-ui/TextField'

type Props = {
  onFetchDirectors: Function,
  directors: Array,
  onCreateDirector: Function,
  onReset: Function,
  handleSubmit: Function,
  onRemoveDirector: Function,
}

const FORM_FIELDS = [
  { id: 1, name: 'first', label: 'Имя' },
  { id: 2, name: 'last', label: 'Фамилия' },
  {
    id: 3,
    name: 'firstOriginal',
    label: 'Имя (оригинал)'
  },
  {
    id: 4,
    name: 'lastOriginal',
    label: 'Фамилия (оригинал)'
  }
]

class DirectorsForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      substring: ''
    }

    this.updateSubstring = this.updateSubstring.bind(this)
    this.sendData = this.sendData.bind(this)
  }

  componentDidMount() {
    const { directors, onFetchDirectors } = this.props
    if (!directors.length) onFetchDirectors()
  }

  updateSubstring(event, value) {
    this.setState({ substring: value.toLowerCase() })
  }

  sendData(value) {
    const data = {
      name: {
        first: value.first,
        last: value.last
      },
      originalName: {
        first: value.firstOriginal,
        last: value.lastOriginal
      }
    }
    this.props.onCreateDirector(data)
    this.props.onReset()
  }

  render() {
    const { substring } = this.state
    const { directors, handleSubmit, onRemoveDirector } = this.props
    const filteredTags = directors.filter(
      ({ name, originalName }) =>
        name.toLowerCase().match(substring) ||
        originalName.toLowerCase().match(substring)
    )

    return (
      <form onSubmit={handleSubmit(this.sendData)}>
        <Grid>
          <Box left>
            {FORM_FIELDS.map(({ name, label, id }) => (
              <Field
                key={id}
                name={name}
                component={TextField}
                floatingLabelText={label}
                fullWidth
                type="text"
              />
            ))}
          </Box>
          <Box right>
            <TextFieldMUI
              value={substring}
              onChange={this.updateSubstring}
              name="substring"
              floatingLabelText="Фильтр"
            />
            <TagsList tags={filteredTags} deleteTag={onRemoveDirector} />
          </Box>
          <RaisedButton type="submit" label="Добавить" secondary />
        </Grid>
      </form>
    )
  }
}

const DirectorFormRedux = reduxForm({
  form: 'DirectorForm'
})(DirectorsForm)

const mapStateToProps = state => ({
  directors: state.directors.data
})

const mapDispatchToProps = dispatch => ({
  onFetchDirectors: () => {
    dispatch(fetchDirectors())
  },
  onCreateDirector: (data: Object) => {
    dispatch(createDirector(data))
  },
  onRemoveDirector: (id) => {
    dispatch(removeDirector(id))
  },
  onReset: () => {
    dispatch(reset('DirectorForm'))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DirectorFormRedux)
