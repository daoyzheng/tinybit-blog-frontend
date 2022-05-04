import styled from "styled-components";

interface AProps {
  large?: boolean
}

export const A = styled.a<AProps>`
  color: #cb8300;
  cursor: pointer;
  font-size: ${props => props.large ? '15px' : '14px'};
  &:hover {
    color: #f19d04;
  }
`

export const PostItemLink = styled.a`
  color: ${props => props.theme.color};
  cursor: pointer;
  font-size: 15px;
  &:hover {
    color: #7c7c7c;
  }

`