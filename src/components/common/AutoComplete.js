import AutoCompleteMaterialUI from 'material-ui/AutoComplete'

type Props = {
  dataSource: Array,
  name: string,
  floatingLabelText?: string,
  fullWidth?: boolean,
}

const AutoComplete = ({
  dataSource,
  name,
  floatingLabelText,
  fullWidth
}: Props) => (
  <AutoCompleteMaterialUI
    dataSource={dataSource}
    name={name}
    floatingLabelText={floatingLabelText}
    fullWidth={fullWidth}
  />
)

export default AutoComplete
