import { Component } from 'react'
import AutoComplete from './AutoComplete'
import TagsList from './TagsList'

type Props = {
  tagsList: Array<{ _id: string, label: string }> | [],
  deleteTag: Function,
  input: Object,
  searchText: string,
  onNewRequest: Function,
}

class AutoCompleteWithTags extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      searchText: ''
    }
    this.onNewRequest = this.onNewRequest.bind(this)
    this.onUpdateInput = this.onUpdateInput.bind(this)
  }

  onNewRequest(tag) {
    const { input } = this.props
    input.onChange([...input.value, tag])
    this.setState({ searchText: '' })
  }

  onUpdateInput(value) {
    this.setState({ searchText: value })
  }

  render() {
    const { tagsList, deleteTag, ...props } = this.props
    return (
      <div>
        <AutoComplete
          searchText={this.state.searchText}
          onNewRequest={this.onNewRequest}
          onUpdateInput={this.onUpdateInput}
          {...props}
        />
        <TagsList tags={tagsList} deleteTag={deleteTag} />
      </div>
    )
  }
}

export default AutoCompleteWithTags
