import TextFieldMaterialUI from 'material-ui/TextField'

type Props = {
  input: Object<{ value?: string, onChange: Function }>,
  floatingLabelText?: string,
}

const TextField = ({ input, floatingLabelText }: Props) => (
  <TextFieldMaterialUI
    value={input.value}
    floatingLabelText={floatingLabelText}
    onChange={input.onChange}
  />
)

export default TextField
