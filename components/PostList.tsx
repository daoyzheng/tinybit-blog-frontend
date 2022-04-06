import { IPostItem } from "../interfaces/post"
import { IStrapiDataResponse } from "../interfaces/strapi"
import PostItem from "./PostItem"

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}

const PostList = ({ posts } : Props) => {
  return (
    <div>
      {posts.map(post => (
        <PostItem post={post} key={post.id}/>
      ))}
      <div></div>
    </div>
  )
}

export default PostList