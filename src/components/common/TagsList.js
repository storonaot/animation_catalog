import Chip from 'material-ui/Chip'

type Props = {
  tags: Array<{ _id: string, label: string }> | [],
  handleRequestDelete: Function,
}

const TagsList = ({ tags, handleRequestDelete }: Props) => (
  <div>
    {tags.map(tag => (
      <Chip key={tag._id} onRequestDelete={() => handleRequestDelete(tag._id)}>
        {tag.label}
      </Chip>
    ))}
  </div>
)

export default TagsList
