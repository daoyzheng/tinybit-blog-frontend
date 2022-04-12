import Nav from "./Nav"
import { TitleContainer } from "./styles/Title.styled"

interface Props {
  title: string
}

const Title = ({ title }: Props) => {
  return (
    <div className="flex justify-between items-center">
      <TitleContainer>{title}</TitleContainer>
      <Nav />
    </div>
  )
}

export default Title