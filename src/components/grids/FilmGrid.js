import styled, { css } from 'styled-components'

const Grid = styled.div`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(12, [col] 1fr);
  grid-template-rows: repeat(9, [row] auto);
`

const Box = styled.div`
  ${props =>
    props.cover &&
    css`
      grid-column: 1 / 6;
      grid-row: 1 / 4;
    `}
  ${props =>
    props.isName &&
    css`
      grid-column: 6 / 13;
      grid-row: 1 / 2;
    `}
  ${props =>
    props.originalName &&
    css`
      grid-column: 6 / 13;
      grid-row: 2 / 3;
    `}
  ${props =>
    props.description &&
    css`
      grid-column: 6 / 13;
      grid-row: 3 / 4;
    `}
  ${props =>
    props.directors &&
    css`
      grid-column: 1 / 7;
      grid-row: 4 / 5;
    `}
  ${props =>
    props.countries &&
    css`
      grid-column: 7 / 13;
      grid-row: 4 / 5;
    `}
  ${props =>
    props.studios &&
    css`
      grid-column: 1 / 7;
      grid-row: 5 / 6;
    `}
  ${props =>
    props.inDvd &&
    css`
      grid-column: 7 / 13;
      grid-row: 5 / 6;
    `}
  ${props =>
    props.langOriginal &&
    css`
      grid-column: 1 / 5;
      grid-row: 6 / 7;
    `}
  ${props =>
    props.translations &&
    css`
      grid-column: 5 / 9;
      grid-row: 6 / 7;
    `}
  ${props =>
    props.subtitles &&
    css`
      grid-column: 9 / 13;
      grid-row: 6 / 7;
    `}
  ${props =>
    props.releaseDate &&
    css`
      grid-column: 1 / 4;
      grid-row: 7 / 8;
    `}
  ${props =>
    props.timeTrack &&
    css`
      grid-column: 4 / 7;
      grid-row: 7 / 8;
    `}
  ${props =>
    props.videoformat &&
    css`
      grid-column: 7 / 10;
      grid-row: 7 / 8;
    `}
  ${props =>
    props.sizeMb &&
    css`
      grid-column: 10 / 13;
      grid-row: 7 / 8;
    `}
  ${props =>
    props.screens &&
    css`
      grid-column: 1 / 13;
      grid-row: 8 / 9;
      display: flex;
      justify-content: flex-end;
      margin-bottom: 30px;
    `}
  ${props =>
    props.actions &&
    css`
      grid-column: 1 / 13;
      display: flex;
      justify-content: flex-end;
    `}
`

export { Grid, Box }
