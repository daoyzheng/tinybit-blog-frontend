import styled, { keyframes } from 'styled-components'

export const ArrowLine = styled.div`
  height: 20px;
  width: 2px;
  background-color: ${props => props.theme.sortIconColor};
  position: relative;
  transition: transform
`

export const LeftArrow = styled.div`
  width: 6px;
  height: 6px;
  border: solid ${props => props.theme.sortIconColor};
  border-width: 0 2px 2px 0;
  position: absolute;
  transform: rotate(225deg);
  right: -2px;
  top: 1px;
`

export const RightArrow = styled.div`
  width: 6px;
  height: 6px;
  border: solid ${props => props.theme.sortIconColor};
  border-width: 0 2px 2px 0;
  position: absolute;
  transform: rotate(45deg);
  bottom: 1px;
  right: -2px;
`

const upward = keyframes`
  100% {
    transform: translateY(-20px);
  }
`

const downward = keyframes`
  100% {
    transform: translateY(20px);
  }
`

export const DownArrowContainer = styled.div`
  > :last-child {
    top: -40px;
  }
`


export const SortIconContainer = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  overflow: hidden;
  &:hover {
    > div:first-child {
      > :first-child {
        animation: ${upward} 200ms;
      }
      > :last-child {
        animation: ${upward} 200ms;
        animation-delay: 100ms;
      }
    }
    > div:last-child {
      > :last-child {
        animation: ${downward} 200ms;
        animation-delay: 100ms;
      }
      > :first-child {
        animation: ${downward} 200ms;
      }
    }
  }
`



