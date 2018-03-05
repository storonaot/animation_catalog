import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(3, [col] 1fr);
  grid-template-rows: repeat(4, [row] auto);
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
  ${props => props.originalName && css`
    grid-column: 3 / 4;
    grid-row: 1;
  `}
  ${props => props.countries && css`
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  `}
  ${props => props.directors && css`
    grid-column: 3 / 4;
    grid-row: 2 / 3;
  `}
  ${props => props.studios && css`
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  `}
  ${props => props.description && css`
    grid-column: 2 / 4;
    grid-row: 4;
  `}
`

export { Grid, Box }
