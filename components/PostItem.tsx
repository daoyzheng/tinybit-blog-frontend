import { IPostItem } from "../interfaces/post"
import { IStrapiDataResponse } from "../interfaces/strapi"
import TagIcon from './TagIcon'
import Link from 'next/link'

interface Props {
  post: IStrapiDataResponse<IPostItem>
  showDate: boolean
}
const PostItem = ({ post, showDate }: Props) => {
  return (
    <div className="flex">
      <div className="flex flex-row space-x-6">
        { showDate ? <div>{new Date(post.attributes.publishedAt).toLocaleDateString('en')}</div> : <></>}
        <div>
          <Link href="/post/[slug]" as={`/post/${post.attributes.slug}`}>
            <a className="break-all">{post.attributes.title}</a>
          </Link>
            <div className="flex space-x-1 grow-0 text-xs">
              {post.attributes.tags.data.map(tag => <TagIcon key={tag.id} tag={tag.attributes.name}/>)}
            </div>
        </div>
      </div>
    </div>
  )
}

export default PostItem