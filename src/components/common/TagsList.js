import styled from 'styled-components'
import Chip from 'material-ui/Chip'

type Props = {
  tags: Array<{ _id: string, name: string }> | [],
  deleteTag: Function,
}

const TagsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -5px
`
const Tag = styled.div`
  margin: 5px;
`

const TagsList = ({ tags, deleteTag }: Props) => (
  <TagsWrapper>
    {tags.map(tag => (
      <Tag key={tag._id}>
        <Chip onRequestDelete={() => deleteTag(tag._id)}>
          {tag.name}
        </Chip>
      </Tag>
    ))}
  </TagsWrapper>
)

export default TagsList
