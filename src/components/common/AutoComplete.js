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
  searchText: string,
}

const AutoComplete = ({
  input,
  dataSource,
  dataSourceConfig,
  meta,
  maxSearchResults,
  floatingLabelText,
  fullWidth,
  openOnFocus,
  onNewRequest,
  searchText
}: Props) => {
  const errorText = getErrorText(meta)

  const onChange = (currentValue, allItems) => {
    const key = dataSourceConfig.text
    const value = allItems.find(item => item[key] === currentValue)
    input.onChange(value)
  }

  return (
    <AutoCompleteMUI
      dataSource={dataSource}
      name={input.name}
      onUpdateInput={onChange}
      filter={AutoCompleteMUI.caseInsensitiveFilter}
      dataSourceConfig={dataSourceConfig}
      errorText={errorText}
      maxSearchResults={maxSearchResults}
      floatingLabelText={floatingLabelText}
      fullWidth={fullWidth}
      openOnFocus={openOnFocus}
      onNewRequest={onNewRequest}
      searchText={searchText}
    />
  )
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
