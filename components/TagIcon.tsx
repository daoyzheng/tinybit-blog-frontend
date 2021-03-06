import { useRouter } from 'next/router'
import { IStrapiDataResponse } from '../interfaces/strapi'
import { ITag } from '../interfaces/tag'
import { TagIconWrapper } from './styles/TagIcon.styled'
interface Props {
  tag: IStrapiDataResponse<ITag>
}
const TagIcon = ({ tag }: Props) => {
  const router = useRouter()
  const handleOnClick = () => {
    router.push(`/tag/${tag.attributes.slug}`)
  }
  return (
    <TagIconWrapper className="border rounded-md text-center p-0.5 text-xs cursor-pointer w-fit" onClick={handleOnClick}>
      {tag.attributes.name}
    </TagIconWrapper>
  )
}

export default TagIcon