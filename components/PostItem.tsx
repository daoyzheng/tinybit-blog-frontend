import { IPostItem } from "../interfaces/post"
import { IStrapiDataResponse } from "../interfaces/strapi"
import TagIcon from './TagIcon'
import Link from 'next/link'
import { PostItemLink } from "./styles/hyperlink.styled"
import CategoryIcon from "./CategoryIcon"

interface Props {
  post: IStrapiDataResponse<IPostItem>
  showDate: boolean
}
const PostItem = ({ post, showDate }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-row space-x-6">
        { showDate ? <div>{new Date(post.attributes.publishedAt).toLocaleDateString('en-CA')}</div> : <></>}
        <div>
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <CategoryIcon category={post.attributes.category.data}/>
              <div>|</div>
            </div>
            <Link href="/post/[slug]" as={`/post/${post.attributes.slug}`} passHref>
              <PostItemLink className="break-all">{post.attributes.title}</PostItemLink>
            </Link>
          </div>
          <div className="flex gap-1 flex-wrap mt-1">
            {post.attributes.tags.data.map(tag => <TagIcon key={tag.id} tag={tag}/>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem