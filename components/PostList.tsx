import { IPostItem } from "../interfaces/post"
import { IStrapiDataResponse } from "../interfaces/strapi"
import PostItem from "./PostItem"

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}

const PostList = ({ posts } : Props) => {
  return (
    <div className="space-y-5">
      {/* {posts.map(post => <div key={post.id}>{post.attributes.title}</div>)} */}
      {posts.map(post =>
        <PostItem post={post} key={post.id}/>
      )}
    </div>
  )
}

export default PostList