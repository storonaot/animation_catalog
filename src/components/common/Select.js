import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import { getErrorText } from 'utils/validator'

type Props = {
  options: Array,
  floatingLabelText?: string,
  fullWidth?: boolean,
  input: Object,
  meta: Object
}

const Select = ({
  options, floatingLabelText, fullWidth, input, meta
}: Props) => {
  if (options.length) {
    const currentValue = input.value && input.value._id ? input.value._id : input.value
    const errorText = getErrorText(meta)

    return (
      <SelectField
        floatingLabelText={floatingLabelText}
        value={currentValue}
        onChange={(e, index, payload) => input.onChange(payload)}
        fullWidth={fullWidth}
        errorText={errorText}
      >
        {options.map(({ _id, name }) => <MenuItem key={_id} value={_id} primaryText={name} />)}
      </SelectField>
    )
  }

  return null
}

Select.defaultProps = {
  fullWidth: true,
  floatingLabelText: null
}

export default Select
