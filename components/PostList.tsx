import { IPostItem } from "../interfaces/post"
import { IStrapiDataResponse } from "../interfaces/strapi"
import PostItem from "./PostItem"

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
  showDate: boolean
}

const PostList = ({ posts, showDate } : Props) => {
  return (
    <div>
      <div className="space-y-3">
        {posts.map(post =>
          <PostItem post={post} key={post.id} showDate={showDate}/>
        )}
      </div>
    </div>
  )
}

PostList.defaultProps = {
  showDate: false
}

export default PostList