import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { fetchSerials } from 'store/actions/serials'

import SerialsList from 'components/SerialsList'

type Props = {
  onFetchSerials: Function,
  serials?: Array<{
    _id: string,
    description: string,
    name: string,
    originalName: string,
  }>,
}

class SerialsPage extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { serials, onFetchSerials } = this.props
    if (!serials.length) onFetchSerials()
  }

  render() {
    const { serials } = this.props

    return (
      <div style={{ textAlign: 'right' }}>
        <Link
          to="/serials/new"
          style={{ marginBottom: 20, display: 'inline-block' }}
        >
          <FloatingActionButton secondary>
            <ContentAdd />
          </FloatingActionButton>
        </Link>

        {serials && <SerialsList serials={serials} />}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  serials: state.serials
})

const mapDispatchToProps = dispatch => ({
  onFetchSerials: () => {
    dispatch(fetchSerials())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SerialsPage)
