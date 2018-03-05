import AutoCompleteMaterialUI from 'material-ui/AutoComplete'

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
  onUpdateInput
}: Props) => (
  <AutoCompleteMaterialUI
    dataSource={dataSource}
    name={name}
    floatingLabelText={floatingLabelText}
    fullWidth={fullWidth}
    value={input.value}
    dataSourceConfig={dataSourceConfig}
    filter={AutoCompleteMaterialUI.caseInsensitiveFilter}
    onNewRequest={onNewRequest}
    maxSearchResults={maxSearchResults}
    openOnFocus={openOnFocus}
    searchText={searchText}
    onUpdateInput={onUpdateInput}
  />
)

export default AutoComplete

AutoComplete.defaultProps = {
  dataSourceConfig: {
    text: 'label',
    value: 'value'
  },
  maxSearchResults: 7,
  openOnFocus: true
}
