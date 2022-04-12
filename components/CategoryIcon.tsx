import { useRouter } from "next/router"
import { ICategory } from "../interfaces/category"
import { IStrapiDataResponse } from "../interfaces/strapi"
import { CategoryIconWrapper } from "./styles/CategoryIcon.styled"

interface Props {
  category: IStrapiDataResponse<ICategory>
  className?: string
}

const CategoryIcon = ({ category, className }: Props) => {
  const router = useRouter()
  const handleOnClick = () => {
    const { locale } = router
    router.push(`category/${category.attributes.name}`, undefined, { locale })
  }
  return (
    <CategoryIconWrapper className={`border rounded-md text-center p-0.5 text-xs cursor-pointer w-fit ${className}`} onClick={handleOnClick}>
      {category.attributes.name}
    </CategoryIconWrapper>
  )
}

export default CategoryIcon