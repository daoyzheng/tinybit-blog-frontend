import styled from 'styled-components'

export const PopupContainer = styled.div<{ showPopup: boolean}>`
  position: absolute;
  top: 30px;
  right: 0px;
  background-color: ${props => props.theme.popupBackgroundColor};
  border: ${props => `1px solid ${props.theme.popupBorderColor}`};
  border-radius: 8px;
  padding: 30px;
  width: 380px;
  max-width: 380px;
  transition: opacity 370ms ease, visibility 370ms ease;
  opacity: ${props => props.showPopup ? '1' : '0'};
  visibility: ${props => props.showPopup ? '' : 'hidden'};

  @media (max-width: 640px) {
    max-width: 300px;
    width: 300px;
  }
`

