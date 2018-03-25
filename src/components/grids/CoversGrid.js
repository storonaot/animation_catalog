import styled from 'styled-components'
import media from 'utils/media'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  @media only screen and (min-width: 640px) {
    margin-left: -15px;
  }
`

const Box = styled.li`
  width: 100%;
  margin-bottom: 15px;
  position: relative;
  &::before {
    content: '';
    padding-bottom: 150%;
    display: block;
  }
  @media ${media.mobile} {
    width: calc(50% - 15px);
    margin-left: 15px;
  }
  @media ${media.tablet} {
    width: calc(33% - 15px);
  }
  @media ${media.laptop} {
    width: calc(25% - 15px);
  }
  @media ${media.desktop} {
    width: calc(16.66% - 15px);
  }
  @media ${media.giant} {
    width: calc(12.5% - 15px);
  }
`

export { Grid, Box }