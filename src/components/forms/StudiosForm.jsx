import { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStudios, createStudio, removeStudio } from 'store/actions/studios'

import { TextField } from 'components/common'
import AdditionForm from './AdditionForm'

const FORM_FIELDS = [
  { id: 1, name: 'name', label: 'Название студии', component: TextField }
]

type Props = {
  onRemoveStudio: Function,
  studios: Array,
  onFetchStudios: Function,
  onCreateStudio: Function,
}

class StudiosForm extends Component<Props> {
  componentDidMount() {
    const { studios, onFetchStudios } = this.props
    if (!studios.length) onFetchStudios()
  }

  render() {
    const { studios, onRemoveStudio, onCreateStudio } = this.props

    return (
      <AdditionForm
        formFields={FORM_FIELDS}
        sendData={onCreateStudio}
        onRemoveTag={onRemoveStudio}
        tags={studios}
        form="StudiosForm"
      />
    )
  }
}

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
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(StudiosForm)
