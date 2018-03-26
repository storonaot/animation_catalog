import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

type Props = {
  options: Array,
  currentValue: number,
  onChange: Function,
  floatingLabelText?: string,
  fullWidth: boolean,
}

const Select = ({
  options,
  currentValue,
  onChange,
  floatingLabelText,
  fullWidth
}: Props) => (
  <SelectField
    floatingLabelText={floatingLabelText}
    value={currentValue}
    onChange={onChange}
    fullWidth={fullWidth}
  >
    {options.map(({ value, label }) => (
      <MenuItem key={value} value={value} primaryText={label} />
    ))}
  </SelectField>
)

Select.defaultProps = {
  fullWidth: true
}

export default Select
