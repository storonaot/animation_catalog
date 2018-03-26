import { getErrorText } from 'utils/validator'
import DatePickerMUI from 'material-ui/DatePicker'

type Props = {
  autoOk: boolean,
  floatingLabelText?: string,
  minDate: Date,
  fullWidth: boolean,
  input: Object<{ value?: string, onChange: Function }>,
  meta: Object<{
    touched: Function,
    submitFailed: boolean,
    valid: boolean,
    error: string,
  }>,
}

const DatePicker = ({
  autoOk,
  floatingLabelText,
  minDate,
  fullWidth,
  input,
  meta
}: Props) => {
  const errorText = getErrorText(meta)

  const onChange = (nil, date) => {
    input.onChange(date)
  }

  return (
    <DatePickerMUI
      onChange={onChange}
      autoOk={autoOk}
      floatingLabelText={floatingLabelText}
      minDate={minDate}
      fullWidth={fullWidth}
      errorText={errorText}
    />
  )
}

DatePicker.defaultProps = {
  autoOk: true,
  minDate: new Date(),
  fullWidth: true
}

export default DatePicker