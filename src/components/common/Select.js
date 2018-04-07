import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

type Props = {
  options: Array,
  floatingLabelText?: string,
  fullWidth: boolean,
  input: Object,
}

const Select = ({ options, floatingLabelText, fullWidth, input }: Props) => {
  if (options.length) {
    const currentVal = input.value || options[0]._id

    return (
      <SelectField
        floatingLabelText={floatingLabelText}
        value={currentVal}
        onChange={(e, index, payload) => input.onChange(payload)}
        fullWidth={fullWidth}
      >
        {options.map(({ _id, name }) => (
          <MenuItem key={_id} value={_id} primaryText={name} />
        ))}
      </SelectField>
    )
  }

  return null
}

Select.defaultProps = {
  fullWidth: true,
  currentValue: null
}

export default Select
