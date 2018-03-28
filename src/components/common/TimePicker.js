import TimePickerMUI from 'material-ui/TimePicker'

import { MILLISECONDS_IN_HOUR, MILLISECONDS_IN_MINUTE } from 'constants'

type Props = {
  input: Object<{ value: Object, onChange: Function }>,
  fullWidth?: boolean,
  hintText?: string,
}

// const MILLISECONDS_IN_SECOND = 1000

const TimePicker = ({
  input: { value, onChange },
  fullWidth,
  hintText
}: Props) => {
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
    />
  )
}

TimePicker.defaultProps = {
  fullWidth: true,
  hintText: 'Длительность (hh:mm)'
}

export default TimePicker
