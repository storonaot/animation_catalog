import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

type Props = {
  options: Array,
  currentValue: number,
  onChange: Function,
  floatingLabelText?: string,
}

const Select = ({
  options,
  currentValue,
  onChange,
  floatingLabelText
}: Props) => (
  <SelectField
    floatingLabelText={floatingLabelText}
    value={currentValue}
    onChange={onChange}
  >
    {options.map(({ value, label }) => (
      <MenuItem key={value} value={value} primaryText={label} />
    ))}
  </SelectField>
)

export default Select
