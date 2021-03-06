import { getErrorText } from 'utils/validator'
import DatePickerMUI from 'material-ui/DatePicker'

const { DateTimeFormat } = global.Intl

type Props = {
  autoOk?: boolean,
  floatingLabelText?: string,
  minDate?: Date,
  fullWidth?: boolean,
  input: Object<{ value?: string, onChange: Function }>,
  meta: Object<{
    touched: Function,
    submitFailed: boolean,
    valid: boolean,
    error: string
  }>,
  mode?: string,
  cancelLabel?: string
}

const DatePicker = ({
  autoOk,
  floatingLabelText,
  minDate,
  fullWidth,
  input,
  meta,
  mode,
  cancelLabel
}: Props) => {
  const errorText = getErrorText(meta)

  const onChange = (nil, date) => {
    input.onChange(date)
  }

  const value = input.value ? new Date(input.value) : null

  return (
    <DatePickerMUI
      onChange={onChange}
      autoOk={autoOk}
      floatingLabelText={floatingLabelText}
      minDate={minDate}
      fullWidth={fullWidth}
      errorText={errorText}
      mode={mode}
      cancelLabel={cancelLabel}
      locale="ru"
      DateTimeFormat={DateTimeFormat}
      value={value}
    />
  )
}

DatePicker.defaultProps = {
  autoOk: true,
  minDate: new Date(1900, 0, 1),
  floatingLabelText: null,
  fullWidth: true,
  mode: 'landscape',
  cancelLabel: 'Отменить'
}

export default DatePicker
