import { ICategory } from "../interfaces/category"
import { IStrapiDataResponse } from "../interfaces/strapi"
import { ITag } from "../interfaces/tag"
import Checkbox from '../components/Checkbox'
import { Line } from './styles/Line.styled'

interface Props {
  availableCategories: IStrapiDataResponse<ICategory>[]
  availableTags: IStrapiDataResponse<ITag>[]
}
const PostFilter = ({ availableCategories, availableTags }: Props) => {
  const handleFilterChange = (value: string, name: string, checked: boolean) => {
    console.log('lkj', value)
    console.log('name', name)
    console.log('jlkn', checked)
  }
  return (
    <div>
      <div className="mb-1">Category</div>
      <Line />
      <div className="flex flex-wrap grow mt-2 gap-2">
        {availableCategories.map(category =>
          <Checkbox label={category.attributes.name} key={category.id} onChange={handleFilterChange} name="category" defaultChecked/>
        )}
      </div>
      <div className="mt-6 mb-1">Tag</div>
      <Line />
      <div className="flex space-x-1 flex-wrap mt-2 gap-2">
        {availableTags.map(tag =>
          <Checkbox label={tag.attributes.name} key={tag.id} onChange={handleFilterChange} name="tag" defaultChecked/>
        )}
      </div>
    </div>
  )
}

export default PostFilter