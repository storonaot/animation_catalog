import TimePickerMUI from 'material-ui/TimePicker'
import { getErrorText } from 'utils/validator'

import { MILLISECONDS_IN_HOUR, MILLISECONDS_IN_MINUTE } from 'constants/index'

type Props = {
  input: Object<{ value: Object, onChange: Function }>,
  fullWidth?: boolean,
  hintText?: string,
  meta: Object<{
    touched: Function,
    submitFailed: boolean,
    valid: boolean,
    error: string,
  }>,
}

const TimePicker = ({
  input: { value, onChange },
  fullWidth,
  hintText,
  meta
}: Props) => {
  const errorText = getErrorText(meta)
  const handleChange = (nil, val) => {
    const date = new Date(val)
    const hours = date.getHours()
    const minutes = date.getMinutes()

    const hoursInMilliseconds = hours * MILLISECONDS_IN_HOUR
    const minutesInMilliseconds = minutes * MILLISECONDS_IN_MINUTE
    const result = hoursInMilliseconds + minutesInMilliseconds

    onChange(result)
  }

  const formatEntryTime = (val) => {
    if (val) {
      const hours = Math.floor(val / MILLISECONDS_IN_HOUR)
      const hoursInMilliseconds = hours * MILLISECONDS_IN_HOUR
      const minutes = Math.floor(
        (val - hoursInMilliseconds) / MILLISECONDS_IN_MINUTE
      )
      const date = new Date()
      date.setHours(hours, minutes)

      return date
    }

    return null
  }

  return (
    <TimePickerMUI
      format="24hr"
      hintText={hintText}
      value={formatEntryTime(value)}
      onChange={handleChange}
      fullWidth={fullWidth}
      floatingLabelText={hintText}
      errorText={errorText}
    />
  )
}

TimePicker.defaultProps = {
  fullWidth: true,
  hintText: 'Длительность (hh:mm)'
}

export default TimePicker
