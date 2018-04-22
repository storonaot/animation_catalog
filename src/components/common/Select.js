import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

type Props = {
  options: Array,
  floatingLabelText?: string,
  fullWidth?: boolean,
  input: Object
}

const Select = ({
  options, floatingLabelText, fullWidth, input
}: Props) => {
  if (options.length) {
    const currentValue = input.value && input.value._id ? input.value._id : input.value

    return (
      <SelectField
        floatingLabelText={floatingLabelText}
        value={currentValue}
        onChange={(e, index, payload) => input.onChange(payload)}
        fullWidth={fullWidth}
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
