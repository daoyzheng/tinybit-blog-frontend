import { IPostItem } from "../interfaces/post"
import { IStrapiDataResponse } from "../interfaces/strapi"
import TagIcon from './TagIcon'

interface Props {
  post: IStrapiDataResponse<IPostItem>
}
const PostItem = ({ post }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-row space-x-6">
        <div>{new Date(post.attributes.publishedAt).toLocaleDateString('en')}</div>
        <div>
          <div className="break-all">{post.attributes.title}lkseeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee</div>
          <div className="flex space-x-1 grow-0 text-xs">
            {post.attributes.tags.data.map(tag => <TagIcon key={tag.id} tag={tag.attributes.name}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem