import { ArrowLine, DownArrowContainer, LeftArrow, RightArrow, SortIconContainer } from "./styles/SortIcon.styled"

const SortIcon = () => {
  return (
    <SortIconContainer>
      <div>
        <ArrowLine><LeftArrow /></ArrowLine>
        <ArrowLine><LeftArrow /></ArrowLine>
      </div>
      <DownArrowContainer>
        <ArrowLine><RightArrow /></ArrowLine>
        <ArrowLine><RightArrow /></ArrowLine>
      </DownArrowContainer>
    </SortIconContainer>
  )
}

export default SortIcon