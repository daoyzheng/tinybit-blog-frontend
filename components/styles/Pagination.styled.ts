import styled from "styled-components";

export const Pagination = styled.div<{active: boolean}>`
  cursor: pointer;
  color: ${props => props.active ? props.theme.tagIconColor : props.theme.fontColor};
`
