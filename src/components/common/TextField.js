import { getErrorText } from 'utils/validator'
import TextFieldMUI from 'material-ui/TextField'

type Props = {
  input: Object<{ value?: string, onChange: Function }>,
  floatingLabelText?: string,
  multiLine?: boolean,
  rows?: number,
  fullWidth?: boolean,
  meta: Object<{
    touched: Function,
    submitFailed: boolean,
    valid: boolean,
    error: string,
  }>,
}

const TextField = ({
  input,
  floatingLabelText,
  multiLine,
  rows,
  fullWidth,
  meta
}: Props) => {
  const errorText = getErrorText(meta)

  return (
    <TextFieldMUI
      value={input.value}
      floatingLabelText={floatingLabelText}
      onChange={input.onChange}
      multiLine={multiLine}
      rows={rows}
      fullWidth={fullWidth}
      errorText={errorText}
    />
  )
}

export default TextField
