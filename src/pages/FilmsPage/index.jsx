import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactPaginate from 'react-paginate'
import { AddBtn } from 'components/common'

import { fetchFilms, createFilm, removeFilm, updateFilm, changeFilmMark } from 'store/actions/films'
import { showConfirmDialog } from 'store/actions/ui'

import { formDataFormatter } from 'utils/form-helper'

import { NUMBER_OF_FILMS_PER_PAGE } from 'constants/index'

import FilmForm from 'components/forms/FilmForm'
import FilmsList from 'components/EpisodesList'
import { Pagination } from 'components/common/index'

import { withRouter } from 'react-router'
import history from 'libs/history'

import queryString from 'query-string'

type Props = {
  onFetchFilms: Function,
  films: Array,
  onCreateFilm: Function,
  onShowConfirmDialog: Function,
  onRemoveFilm: Function,
  onUpdateFilm: Function,
  onChangeFilmMark: Function,
  location: Object,
  filmsCount: number
}

const getSkip = (pageNumber, numberPerPage) => pageNumber * numberPerPage

class FilmsPage extends Component<Props> {
  constructor(props) {
    super(props)
    const parsed = queryString.parse(props.location.search)

    this.state = {
      formOpened: false,
      currentFilm: null,
      initialPage: parsed.page,
      initialSkip: getSkip(parsed.page, NUMBER_OF_FILMS_PER_PAGE) || 0
    }
  }

  componentDidMount() {
    const { onFetchFilms } = this.props
    const { initialSkip } = this.state

    onFetchFilms({ skip: initialSkip, limit: NUMBER_OF_FILMS_PER_PAGE })
  }

  onPageChange = ({ selected: pageNumber }) => {
    const { onFetchFilms } = this.props
    const skip = getSkip(pageNumber, NUMBER_OF_FILMS_PER_PAGE)
    onFetchFilms({ skip, limit: NUMBER_OF_FILMS_PER_PAGE })
    history.push(`/films?page=${pageNumber}`)
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
    const { onCreateFilm, onUpdateFilm } = this.props
    if (data._id) {
      const { _id } = data
      onUpdateFilm(_id, formDataFormatter(data))
    } else {
      onCreateFilm(formDataFormatter(data))
    }

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
    const { formOpened, currentFilm, initialPage } = this.state
    const { films, onChangeFilmMark, filmsCount } = this.props
    const pageCount = Math.ceil(filmsCount / NUMBER_OF_FILMS_PER_PAGE)

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
          selectMark={onChangeFilmMark}
        />
        <Pagination
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={1}
          onPageChange={this.onPageChange}
          initialPage={initialPage}
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

// {/* <ReactPaginate
// previousLabel={<span>hui</span>}
// nextLabel={<span>pizda</span>}
// breakLabel={<span>suquaaaaa</span>}
// pageCount={pagesCount}
// marginPagesDisplayed={3}
// pageRangeDisplayed={1}
// onPageChange={this.onPageChange}
// initialPage={initialPage}
// /> */}

// {
//   /* <ReactPaginate
// breakClassName="break-me"
// pageCount={pageCount}
// containerClassName="pagination"
// subContainerClassName="pages pagination"
// activeClassName="active"
// onPageChange={({ selected: pageNumber }) => {
//   changeReviewsParam(pageNumber, 'page');
// }}
// /> */
// }

const mapStateToProps = state => ({
  films: state.films.list,
  filmsCount: state.films.count,
  state
})
const mapDispatchToProps = dispatch => ({
  onFetchFilms: (query) => {
    dispatch(fetchFilms(query))
  },
  onCreateFilm: (data) => {
    dispatch(createFilm(data))
  },
  onUpdateFilm: (id, data) => {
    dispatch(updateFilm(id, data))
  },
  onShowConfirmDialog: (data) => {
    dispatch(showConfirmDialog(data))
  },
  onRemoveFilm: (id) => {
    dispatch(removeFilm(id))
  },
  onChangeFilmMark: (id, data) => {
    dispatch(changeFilmMark(id, data))
  }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FilmsPage))
