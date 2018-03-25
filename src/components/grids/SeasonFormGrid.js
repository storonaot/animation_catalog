import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, [col] 1fr);
  grid-template-rows: repeat(3, [row] auto);
  margin-bottom: 30px;
`

const Box = styled.div`
  ${props => props.cover && css`
    grid-column: 1 / 2;
    grid-row: 1 / 4;
  `}
  ${props => props.isName && css`
    grid-column: 2 / 3;
    grid-row: 1;
  `}
  ${props => props.number && css`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  `}
  ${props => props.controls && css`
    grid-column: 2 / 3;
    grid-row: 3;
  `}
`

export { Grid, Box }
