import { getErrorText } from 'utils/validator'
import AutoCompleteMUI from 'material-ui/AutoComplete'

type Props = {
  dataSource: Array,
  name: string,
  floatingLabelText?: string,
  fullWidth?: boolean,
  input: Object,
  dataSourceConfig?: Object,
  maxSearchResults?: number,
  openOnFocus?: boolean,
  onNewRequest: Function,
  searchText: string,
  onUpdateInput: Function,
  meta: Object<{
    touched: Function,
    submitFailed: boolean,
    valid: boolean,
    error: string,
  }>,
}

const AutoComplete = ({
  dataSource,
  name,
  floatingLabelText,
  fullWidth,
  input,
  dataSourceConfig,
  maxSearchResults,
  openOnFocus,
  onNewRequest,
  searchText,
  onUpdateInput,
  meta
}: Props) => {
  const errorText = getErrorText(meta)
  return (
    <AutoCompleteMUI
      dataSource={dataSource}
      name={name}
      floatingLabelText={floatingLabelText}
      fullWidth={fullWidth}
      value={input.value}
      dataSourceConfig={dataSourceConfig}
      filter={AutoCompleteMUI.caseInsensitiveFilter}
      onNewRequest={onNewRequest}
      maxSearchResults={maxSearchResults}
      openOnFocus={openOnFocus}
      searchText={searchText}
      onUpdateInput={onUpdateInput}
      errorText={errorText}
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
