import { Component } from 'react'
import { getErrorText } from 'utils/validator'
import AutoCompleteMUI from 'material-ui/AutoComplete'

type Props = {
  input: Object,
  dataSource: Array,
  dataSourceConfig?: Object,
  meta: Object,
  maxSearchResults?: number,
  floatingLabelText: string,
  fullWidth?: boolean,
  openOnFocus?: boolean,
  onNewRequest: Function,
  searchText: string
}

class AutoComplete extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      search: props.searchText || props.input.value.name
    }
  }

  onChange = (currentValue, allItems) => {
    const { dataSourceConfig, input } = this.props
    this.setState({ search: currentValue })

    const key = dataSourceConfig.text
    const result = allItems.find(item => item[key] === currentValue)
    input.onChange(result || currentValue)
  }

  render() {
    const {
      input,
      dataSource,
      dataSourceConfig,
      meta,
      maxSearchResults,
      floatingLabelText,
      fullWidth,
      openOnFocus,
      onNewRequest
    } = this.props
    const errorText = getErrorText(meta)
    return (
      <AutoCompleteMUI
        dataSource={dataSource}
        name={input.name}
        onUpdateInput={this.onChange}
        filter={AutoCompleteMUI.caseInsensitiveFilter}
        dataSourceConfig={dataSourceConfig}
        errorText={errorText}
        maxSearchResults={maxSearchResults}
        floatingLabelText={floatingLabelText}
        fullWidth={fullWidth}
        openOnFocus={openOnFocus}
        onNewRequest={onNewRequest}
        searchText={this.state.search}
      />
    )
  }
}

AutoComplete.defaultProps = {
  dataSourceConfig: {
    text: 'name',
    value: '_id'
  },
  maxSearchResults: 7,
  openOnFocus: true,
  fullWidth: true
}

export default AutoComplete
