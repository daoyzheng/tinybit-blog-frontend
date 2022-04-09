import styled, { keyframes } from 'styled-components'

export const VerticalLine = styled.div`
  background-color: ${props => props.theme.filterIconVerticalLineBackground};
  width: 2px;
  position: relative;
  border-radius: 2px;
`

const HorizontalLine = styled.div`
  width: 6px;
  height: 2px;
  left: -2px;
  position: absolute;
  background-color: ${props => props.theme.filterIconHorizontalLineBackground};
`

export const HorizontalLineLeft = styled(HorizontalLine)`
  top: 8px;
`
export const HorizontalLineMiddle = styled(HorizontalLine)`
  top: 12px;
`
export const HorizontalLineRight = styled(HorizontalLine)`
  top: 5px;
`

const upward = keyframes`
  50% {
    transform: translateY(-5px);
  }
`

const downward = keyframes`
  50% {
    transform: translateY(5px);
  }
`

export const FilterIconContainer = styled.div`
  display: flex;
  width: 18px;
  height: 20px;
  justify-content: space-between;
  &:hover {
    div:first-child div{
      animation: ${downward} 500ms
    }
    div:nth-child(2) div {
      animation: ${upward} 500ms
    }
    div:nth-child(3) div {
      animation: ${downward} 500ms
    }
  }
`

