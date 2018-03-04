import TextFieldMaterialUI from 'material-ui/TextField'

type Props = {
  input: Object<{ value?: string, onChange: Function }>,
  floatingLabelText?: string,
  multiLine?: boolean,
  rows?: number,
  fullWidth?: boolean,
}

const TextField = ({
  input,
  floatingLabelText,
  multiLine,
  rows,
  fullWidth
}: Props) => (
  <TextFieldMaterialUI
    value={input.value}
    floatingLabelText={floatingLabelText}
    onChange={input.onChange}
    multiLine={multiLine}
    rows={rows}
    fullWidth={fullWidth}
  />
)

export default TextField
