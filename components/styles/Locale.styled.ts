import styled from "styled-components";

export const Locale = styled.div<{active: boolean}>`
  color: ${props => props.active ? '#F87171' : props.theme.fontColor};
  cursor: pointer;
`