import { Component } from 'react'
import AutoComplete from './AutoComplete'
import TagsList from './TagsList'

type Props = {
  tagsList: Array<{ _id: string, label: string }> | [],
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
    this.onDeleteTag = this.onDeleteTag.bind(this)
  }

  onNewRequest(tag) {
    console.log('tag', tag._id)
    if (tag._id) {
      const { input } = this.props
      input.onChange([...input.value, tag])
    }
    this.setState({ searchText: '' })
  }

  onUpdateInput(value) {
    this.setState({ searchText: value })
  }

  onDeleteTag(tagId) {
    const { input } = this.props
    const newTags = input.value.filter(val => val._id !== tagId)
    input.onChange(newTags)
  }

  render() {
    const { tagsList, ...props } = this.props
    return (
      <div>
        <AutoComplete
          searchText={this.state.searchText}
          onNewRequest={this.onNewRequest}
          onUpdateInput={this.onUpdateInput}
          {...props}
        />
        <TagsList tags={tagsList} deleteTag={this.onDeleteTag} />
      </div>
    )
  }
}

export default AutoCompleteWithTags
