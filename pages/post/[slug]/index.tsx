import { IPostItem } from "../../../interfaces/post"
import { IStrapiDataResponse } from "../../../interfaces/strapi"
import { getList, updateUpvote } from "../../../utils/request"
import { GetStaticProps } from 'next'
import Custom404 from "../../404"
import TagIcon from "../../../components/TagIcon"
import CategoryIcon from "../../../components/CategoryIcon"
import ReactMarkdown from 'react-markdown'
import { TitleContainer } from "../../../components/styles/Title.styled"
import Upvote from "../../../components/Upvote"
import { IUpdateUpvotePayload } from "../../../interfaces/upvote"

interface Props {
  postDetails: IStrapiDataResponse<IPostItem>
}

const PostDetails = ({ postDetails }: Props) => {
  const handleOnClick = async (upvotes: number, upvoteId: number) => {
    const payload: IUpdateUpvotePayload = {
      data: {
        count: upvotes
      }
    }
    await updateUpvote(`api/upvotes/${upvoteId}`, payload)
  }
  return postDetails ? (
    <div>
      <TitleContainer>{postDetails.attributes.title}</TitleContainer>
      <div className="text-sm mt-2">{new Date(postDetails.attributes.publishedAt).toLocaleDateString('en-CA')}</div>
      <ReactMarkdown className="mt-6">{postDetails.attributes.content}</ReactMarkdown>
      <div className="mt-10">
        <div className="flex items-center gap-2">
          <div>Category: </div>
          <CategoryIcon category={postDetails.attributes.category.data} />
        </div>
        <div>
          <div className="flex items-center gap-2 flex-wrap mt-2">
            <div>Tags: </div>
            <div className="flex gap-1 items-center flex-wrap">
              {postDetails.attributes.tags.data.map(tag => <TagIcon key={tag.id} tag={tag}/>)}
            </div>
          </div>
          <Upvote onClick={handleOnClick} className="cursor-pointer" upvote={postDetails.attributes.upvote.data}/>
        </div>
      </div>
    </div>
  ) : <Custom404/>
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  let slug = ''
  if (params) slug = params.slug as string
  const query = {
    filters: {
      slug: {
        $eq: slug
      }
    }
  }
  const post = await getList('api/posts/', query)
  const postDetails = post.data.length > 0 ? post.data[0] : null
  return {
    props: {
      postDetails
    },
    revalidate: 10
  }
}

export const getStaticPaths = async () => {
  let currentPage = 1
  let pageCount = 1
  const slugs: string[] = []
  while(currentPage <= pageCount) {
    const query = {
      pagination: {
        page: currentPage,
        pageSize: 100,
        withCount: true
      }
    }
    const res = await getList<IPostItem>('api/posts', query)
    const currentSlugs = res.data.map(post => post.attributes.slug)
    slugs.push(...currentSlugs)
    pageCount = res.meta.pagination.pageCount
    currentPage++
  }
  const paths = slugs.map(slug => ({ params: {slug: slug}}))
  return {
    paths,
    fallback: false
  }
}

export default PostDetails