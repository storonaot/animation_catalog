import { Component } from 'react'
import AutoComplete from './AutoComplete'
import TagsList from './TagsList'

type Props = {
  tagsList: Array<{ _id: string, label: string }> | [],
  input: Object,
  searchText: string,
  onNewRequest: Function
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
    if (tag._id) {
      const { input } = this.props
      input.onChange([...input.value, tag])
    }
    this.setState({ searchText: null })
  }

  onUpdateInput(value) {
    const searchText = typeof value === 'string' ? value : value.name

    this.setState({ searchText })
  }

  onDeleteTag(tagId) {
    const { input } = this.props
    const newTags = input.value.filter(val => val._id !== tagId)
    input.onChange(newTags)
  }

  render() {
    const { tagsList, input, ...rest } = this.props

    return (
      <div>
        <AutoComplete
          {...rest}
          onNewRequest={this.onNewRequest}
          searchText={this.state.searchText}
          input={{ onChange: this.onUpdateInput, value: input.value }}
          clearAfterChange
        />
        <TagsList tags={tagsList} deleteTag={this.onDeleteTag} />
      </div>
    )
  }
}

export default AutoCompleteWithTags
