import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AddBtn } from 'components/common'

import FilmForm from 'components/forms/FilmForm'

class FilmsPage extends Component {
  state = {
    formOpened: false
  }
  showForm = () => {
    this.setState({ formOpened: true })
  }
  render() {
    const { formOpened } = this.state
    return (
      <div>
        <AddBtn handleClick={this.showForm} />
        {formOpened && (
          <FilmForm
            showed={formOpened}
            sendData={() => {}}
            onClose={() => {}}
            initialValues={null}
          />
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({})
const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage)
