import styled from 'styled-components'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
`

const Box = styled.li`
  width: calc(20% - 15px);
  margin-left: 15px;
  margin-bottom: 15px;
  position: relative;
  &::before {
    content: '';
    padding-bottom: 100%;
    display: block;
  }
`
export { Grid, Box }
