import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, [col] 1fr);
  margin-bottom: 30px;
`

const Box = styled.div`
  ${props => props.left && css`
    grid-column: 1 / 2;
  `}
  ${props => props.right && css`
    grid-column: 2 / 4;
  `}
`

export { Grid, Box }
