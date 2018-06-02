import styled, { css } from 'styled-components'
import media from 'utils/media'

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 100px;
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
  ${props =>
    props.small &&
    css`
      width: 50%;
      @media ${media.mobile} {
        width: calc(33% - 15px);
      }
      @media ${media.tablet} {
        width: calc(25% - 15px);
      }
      @media ${media.laptop} {
        width: calc(16.66% - 15px);
      }
      @media ${media.desktop} {
        width: calc(12.5% - 15px);
      }
      @media ${media.giant} {
        width: calc(10% - 15px);
      }
    `};
  ${props =>
    props.orientation === 'gorizontal' &&
    css`
      &::before {
        content: '';
        padding-bottom: 75%;
        display: block;
      }
    `};
`

export { Grid, Box }
