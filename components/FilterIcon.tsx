import {
  VerticalLine, HorizontalLineLeft,
  HorizontalLineMiddle, HorizontalLineRight,
  FilterIconContainer
} from './styles/FilterIcon.styled'

interface Props {
  className: string
  onClick: () => void
}
const FilterIcon = ({ className, onClick } : Props) => {
  return (
    <FilterIconContainer className={className} onClick={onClick}>
      <VerticalLine>
        <HorizontalLineLeft />
      </VerticalLine>
      <VerticalLine>
        <HorizontalLineMiddle />
      </VerticalLine>
      <VerticalLine>
        <HorizontalLineRight />
      </VerticalLine>
    </FilterIconContainer>
  )
}

export default FilterIcon