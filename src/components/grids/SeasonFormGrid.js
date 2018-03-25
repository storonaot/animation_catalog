import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(2, [col] 1fr);
  grid-template-rows: repeat(3, [row] auto);
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
    grid-row: 2;
    margin-bottom: 30px;
  `}
  ${props => props.actions && css`
    grid-column: 2 / 3;
    grid-row: 3;
    display: flex;
    justify-content: flex-end;
  `}
`

export { Grid, Box }
