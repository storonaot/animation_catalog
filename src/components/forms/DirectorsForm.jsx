import { Component } from 'react'
import { connect } from 'react-redux'
import {
  fetchDirectors,
  createDirector,
  removeDirector
} from 'store/actions/directors'

import { TextField } from 'components/common'
import AdditionForm from './AdditionForm'

const FORM_FIELDS = [
  { id: 1, name: 'first', label: 'Имя', component: TextField },
  { id: 2, name: 'last', label: 'Фамилия', component: TextField },
  {
    id: 3,
    name: 'firstOriginal',
    label: 'Имя (оригинал)',
    component: TextField
  },
  {
    id: 4,
    name: 'lastOriginal',
    label: 'Фамилия (оригинал)',
    component: TextField
  }
]

type Props = {
  directors: Array,
  onFetchDirectors: Function,
  onCreateDirector: Function,
  onRemoveDirector: Function,
}

class DirectorsForm extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
    this.sendData = this.sendData.bind(this)
  }
  componentDidMount() {
    const { directors, onFetchDirectors } = this.props
    if (!directors.length) onFetchDirectors()
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
  }

  render() {
    const { directors, onRemoveDirector } = this.props

    // фильтровать теги по оригинальному имени и по переводу
    const filterFunc = substr => ({ name, originalName }) =>
      name.toLowerCase().match(substr.toLowerCase()) ||
      originalName.toLowerCase().match(substr.toLowerCase())

    return (
      <AdditionForm
        formFields={FORM_FIELDS}
        sendData={this.sendData}
        onRemoveTag={onRemoveDirector}
        tags={directors}
        form="DirectorsForm"
        filterFunc={filterFunc}
      />
    )
  }
}

const mapStateToProps = state => ({
  directors: state.directors
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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(DirectorsForm)
