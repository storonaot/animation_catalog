import { uniqueId as _uniqueId } from 'lodash'

import Label from './Label'
import FieldGroup from './FieldGroup'

type Props = {
  label?: string,
  value: string,
  onChange: Function,
  placeholder?: string,
}

const TextArea = ({ label, value, onChange, placeholder }: Props) => {
  const id = _uniqueId()

  return (
    <FieldGroup>
      {label && <Label htmlFor={id}>{label}</Label>}
      <textarea onChange={onChange} id={id} placeholder={placeholder}>
        {value}
      </textarea>
    </FieldGroup>
  )
}

export default TextArea
