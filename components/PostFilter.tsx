import { ICategory } from "../interfaces/category"
import { IStrapiDataResponse } from "../interfaces/strapi"
import { ITag } from "../interfaces/tag"
import Checkbox from '../components/Checkbox'
import { useState } from "react"

interface Props {
  availableCategories: IStrapiDataResponse<ICategory>[]
  availableTags: IStrapiDataResponse<ITag>[]
}
const PostFilter = ({ availableCategories, availableTags }: Props) => {
  const [isChecked, setIsChecked] = useState(false)
  const handleClick = () => {
    setIsChecked(!isChecked)
    console.log('lkj', isChecked)
  }
  return (
    <div>
      <div>Category</div>
      <div className="flex flex-wrap">
        {availableCategories.map(category =>
          <Checkbox label={category.attributes.name} key={category.id} onChange={handleClick} checked={isChecked}/>
        )}
        {availableCategories.map(category =>
          <Checkbox label={category.attributes.name} key={category.id} onChange={handleClick} checked={isChecked}/>
        )}
        {availableCategories.map(category =>
          <Checkbox label={category.attributes.name} key={category.id} onChange={handleClick} checked={isChecked}/>
        )}
      </div>
      <div className="mt-6 mb-3">Tag</div>
      <div className="flex space-x-1">
        {availableTags.map(tag =>
          <Checkbox label={tag.attributes.name} key={tag.id} onChange={handleClick} checked={isChecked}/>
        )}
      </div>
    </div>
  )
}

export default PostFilter