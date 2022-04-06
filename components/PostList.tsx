import { IPostItem } from "../interfaces/post"
import { IStrapiDataResponse } from "../interfaces/strapi"
import PostItem from "./PostItem"

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}

const PostList = ({ posts } : Props) => {
  console.log('lkj', posts)
  return (
    <div>
      {/* {posts.map(post => <div key={post.id}>{post.attributes.title}</div>)} */}
      {posts.map(post =>
        <PostItem post={post} key={post.id}/>
      )}
    </div>
  )
}

export default PostList