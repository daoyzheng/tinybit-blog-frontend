import CategoryIcon from "../../components/CategoryIcon"
import { Line } from "../../components/styles/Line.styled"
import { TitleContainer } from "../../components/styles/Title.styled"
import TagIcon from "../../components/TagIcon"
import { ICategory } from "../../interfaces/category"
import { IStrapiDataResponse } from "../../interfaces/strapi"
import { getList } from "../../utils/request"

interface Props {
  categories: IStrapiDataResponse<ICategory>[]
}

const Tags = ({ categories }: Props) => {
  return (
    <div>
      <TitleContainer>Tags</TitleContainer>
      { categories.map(category => {
        return (
          <div key={category.id} className="mt-5 flex flex-col">
            <CategoryIcon category={category} className="mb-2"/>
            <Line/>
            <div className="flex gap-3 flex-wrap mt-2">
              {category.attributes.tags && category.attributes.tags.data.length > 0 ?
                category.attributes.tags?.data.map(tag => <TagIcon key={tag.id} tag={tag}/>):
                <div className="italic text-xs">No tags available</div>
              }
            </div>
          </div>
        )
      })}
    </div>
  )
}
export default Tags

export const getStaticProps = async () => {
  const query = {
    populate: ['tags']
  }
  const [
    categories
  ] = await Promise.all([
    getList<ICategory>('api/categories', query),
  ])
  return {
    props: {
      categories: categories.data,
    }
  }
}