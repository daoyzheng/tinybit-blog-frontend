import { IPostItem } from "../interfaces/post"
import { IStrapiDataResponse } from "../interfaces/strapi"

interface Props {
  post: IStrapiDataResponse<IPostItem>
}
const PostItem = ({ post }: Props) => {
  return (
    <div className="flex">
      <div>{post.attributes.publishedAt}</div>
      <div>{post.attributes.title}</div>
      {post.attributes.tags.data.map(tag => <div key={tag.id}>{tag.attributes.name}</div>)}
    </div>
  )
}

export default PostItem