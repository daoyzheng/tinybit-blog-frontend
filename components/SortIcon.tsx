import { ArrowLine, DownArrowContainer, LeftArrow, RightArrow, SortIconContainer } from "./styles/SortIcon.styled"

interface Props {
  onClick: () => void
}

const SortIcon = ({ onClick }: Props) => {
  return (
    <SortIconContainer onClick={onClick}>
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