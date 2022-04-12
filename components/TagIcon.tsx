import { TagIconWrapper } from './styles/TagIcon.styled'
interface Props {
  tag: string
}
const TagIcon = ({ tag }: Props) => {
  return (
    <TagIconWrapper className="border rounded-md text-center p-0.5 text-xs">
      {tag}
    </TagIconWrapper>
  )
}

export default TagIcon