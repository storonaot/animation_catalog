import styled from 'styled-components'
import Chip from 'material-ui/Chip'

type Props = {
  tags: Array<{ value: string, label: string }> | [],
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
      <Tag key={tag.value}>
        <Chip onRequestDelete={() => deleteTag(tag.value)}>
          {tag.label}
        </Chip>
      </Tag>
    ))}
  </TagsWrapper>
)

export default TagsList
