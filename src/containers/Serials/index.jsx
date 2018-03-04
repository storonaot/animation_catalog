import { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import fetchSerials from 'store/actions/serials'

type Props = {
  onFetchSerials: Function,
  serials?: Array<{
    _id: string,
    description: string,
    name: string,
    originalName: string,
  }>,
}

class Serials extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    const { serials, onFetchSerials } = this.props
    if (!serials) onFetchSerials()
  }

  render() {
    const { serials } = this.props

    return (
      <div>
        {serials &&
          <ul>
            {serials.map(serial => (
              <Link to={`/serials/${serial._id}`} key={serial._id}>
                <li>{serial.name}</li>
              </Link>
            ))}
          </ul>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  serials: state.serials.data
})

const mapDispatchToProps = dispatch => ({
  onFetchSerials: () => {
    dispatch(fetchSerials())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Serials)
