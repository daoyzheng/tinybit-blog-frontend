import styled, { keyframes } from "styled-components";

const jiggle = keyframes`
  33% {
    transform: rotate(45deg)
  }
  66% {
    transform: rotate(-45deg)
  }
`

export const UpvoteWrapper = styled.div`
  &:hover {
    animation: ${jiggle} 500ms
  }
`