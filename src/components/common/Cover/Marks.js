import React from 'react'
import styled from 'styled-components'
import IconButton from 'material-ui/IconButton'
import Visibility from 'material-ui/svg-icons/action/visibility'
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off'
import Favorite from 'material-ui/svg-icons/action/favorite'
import FavoriteBorder from 'material-ui/svg-icons/action/favorite-border'
import AddCircle from 'material-ui/svg-icons/content/add-circle'
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline'
import { red700, lightBlue500, green500 } from 'material-ui/styles/colors'

type Props = {
  selectMark: Function,
  id: string,
  marks: Object<{ liked: boolean, selected: boolean, viewed: boolean }>
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 85px;
  right: 5px;
  z-index: 2;
  display: flex;
  flex-direction: column;
`

const buttonStyle = {
  height: 'auto',
  width: 'auto',
  padding: 5,
  backgroundColor: 'rgba(255, 255, 255, .7)'
}

const Marks = ({ selectMark, id, marks }: Props) => {
  const ViewedIcon = marks.viewed ? <Visibility color={lightBlue500} /> : <VisibilityOff />
  const LikedIcon = marks.liked ? <Favorite color={red700} /> : <FavoriteBorder />
  const SelectedIcon = marks.selected ? <AddCircle color={green500} /> : <AddCircleOutline />

  const onSelect = (name) => {
    selectMark(id, { ...marks, [name]: !marks[name] })
  }

  return (
    <Wrapper>
      <IconButton style={buttonStyle} onClick={() => onSelect('viewed')}>
        {ViewedIcon}
      </IconButton>
      <IconButton style={buttonStyle} onClick={() => onSelect('liked')}>
        {LikedIcon}
      </IconButton>
      <IconButton style={buttonStyle} onClick={() => onSelect('selected')}>
        {SelectedIcon}
      </IconButton>
    </Wrapper>
  )
}

export default Marks
