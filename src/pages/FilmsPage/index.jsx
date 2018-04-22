import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddBtn } from 'components/common'

import { fetchFilms, createFilm, removeFilm } from 'store/actions/films'
import { showConfirmDialog } from 'store/actions/ui'

import { formDataFormatter } from 'utils/form-helper'

import FilmForm from 'components/forms/FilmForm'
import FilmsList from 'components/EpisodesList'

type Props = {
  onFetchFilms: Function,
  films: Array,
  onCreateFilm: Function,
  onShowConfirmDialog: Function,
  onRemoveFilm: Function
}

class FilmsPage extends Component<Props> {
  state = {
    formOpened: false,
    currentFilm: null
  }

  componentDidMount() {
    const { onFetchFilms } = this.props
    onFetchFilms()
  }

  setCurrentFilm = (filmId) => {
    const { films } = this.props
    const currentFilm = films.find(film => film._id === filmId)
    this.setState({ currentFilm })
  }

  showForm = (filmId) => {
    if (filmId) this.setCurrentFilm(filmId)
    this.setState({ formOpened: true })
  }

  closeForm = () => {
    this.setState({ formOpened: false })
  }

  send = (data) => {
    const { onCreateFilm } = this.props
    onCreateFilm(formDataFormatter(data))

    this.closeForm()
  }

  showConfirmDialog = (filmId) => {
    const { onShowConfirmDialog, films, onRemoveFilm } = this.props

    const { name } = films.find(film => film._id === filmId)

    onShowConfirmDialog({
      title: 'Удаление',
      message: `Вы уверены что хотите удалить ${name}?`,
      onSuccess: () => onRemoveFilm(filmId)
    })
  }

  render() {
    const { formOpened, currentFilm } = this.state
    const { films } = this.props

    return (
      <div>
        <AddBtn handleClick={this.showForm} />
        <FilmsList
          episodes={films}
          removeEpisode={(id) => {
            this.showConfirmDialog(id)
          }}
          editEpisode={(id) => {
            this.showForm(id)
          }}
          orientation="vertical"
          small
        />
        {formOpened && (
          <FilmForm
            showed={formOpened}
            sendData={this.send}
            onClose={this.closeForm}
            initialValues={currentFilm}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  films: state.films,
  state
})
const mapDispatchToProps = dispatch => ({
  onFetchFilms: () => {
    dispatch(fetchFilms())
  },
  onCreateFilm: (data) => {
    dispatch(createFilm(data))
  },
  onShowConfirmDialog: (data) => {
    dispatch(showConfirmDialog(data))
  },
  onRemoveFilm: (id) => {
    dispatch(removeFilm(id))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage)
