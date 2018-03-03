import { Component } from 'react'
import { connect } from 'react-redux'

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
    this.props.onFetchSerials()
  }

  render() {
    const { serials } = this.props

    return (
      <div>
        {serials &&
          <ul>
            {serials.map(serial => <li key={serial._id}>{serial.name}</li>)}
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
