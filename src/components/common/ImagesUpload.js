import { uniqueId as _uniqueId } from 'lodash'
import styled from 'styled-components'
import ImageUpload from './ImageUpload'

type Props = {
  fields: Object,
  maxImages: number,
}

const Wrapper = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(6, [col] 1fr);
  width: 100%
`

const ImagesUpload = ({ fields, maxImages }: Props) => {
  const allFields = fields.getAll() || []

  return (
    <Wrapper>
      {fields.getAll() &&
        fields.map((img, index) => (
          <div key={_uniqueId()} style={{ width: '100%', height: 100 }}>
            <ImageUpload
              input={{
                value: fields.get(index),
                onChange: value => fields.push(value)
              }}
              onRemove={() => {
                fields.remove(index)
              }}
            />
          </div>
        ))}
      {allFields.length < maxImages &&
        <div style={{ width: 100, height: 100 }}>
          <ImageUpload
            input={{ value: '', onChange: value => fields.push(value) }}
          />
        </div>}
    </Wrapper>
  )
}

ImagesUpload.defaultProps = {
  maxImages: 10
}

export default ImagesUpload
