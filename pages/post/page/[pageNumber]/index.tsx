import { GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router"
import PostList from "../../../../components/PostList"
import { Pagination } from "../../../../components/styles/Pagination.styled"
import { TitleContainer } from "../../../../components/styles/Title.styled"
import { IPostItem } from "../../../../interfaces/post"
import { IStrapiDataResponse } from "../../../../interfaces/strapi"
import { getList } from "../../../../utils/request"
import { descendingPublishDate } from '../../../../utils/specifications'
import Custom404 from "../../../404"

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
  pageCount: number
  currentPage: number
}

const Post : NextPage<Props> = ({ posts, pageCount, currentPage }: Props) => {
  const router = useRouter()
  const handlePageClick = (pageNumber: number) => {
    if (pageNumber != currentPage) router.push(`/post/page/${pageNumber}`)
  }
  return currentPage <= pageCount ? (
    <div>
      <TitleContainer>Posts</TitleContainer>
      {posts && posts.length > 0 ? (
        <>
          <div className="mt-5">
            <PostList posts={posts} showDate/>
          </div>
          { pageCount > 1 ?
            <div className="flex items-center justify-center gap-2 flex-wrap break-all mt-20">
              {Array.from({length: pageCount}, (_, i) => i + 1).map(pageNumber =>
                <Pagination key={pageNumber} active={pageNumber == currentPage} onClick={() => handlePageClick(pageNumber)}>{pageNumber}</Pagination>
              )}
            </div> : ''}
        </>
        ) : <div className="text-xs italic">No posts</div>
      }
    </div>
  ) : <Custom404 />
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) return {props: {posts: [], pageCount: 0}}
  const currentPage = context.params.pageNumber
  const query = {
    sort: descendingPublishDate,
    pagination: {
      page: currentPage,
      pageSize: 50,
      withCount: true
    }
  }
  const posts = await getList<IPostItem>('api/posts', query)
  const { pageCount } = posts.meta.pagination
  return {
    props: {
      posts: posts.data,
      pageCount,
      currentPage
    },
    revalidate: 10
  }
}

export const getStaticPaths = async () => {
  const query = {
    sort: descendingPublishDate,
    pagination: {
      page: 1,
      pageSize: 50,
      withCount: true
    }
  }
  const posts = await getList<IPostItem>('api/posts', query)
  const { pageCount } = posts.meta.pagination
  const pageNumbers = Array.from({length: pageCount}, (_, i) => i + 1)
  const paths = pageNumbers.map(number => ({ params: { pageNumber: number.toString() }}))
  return {
    paths,
    fallback: false
  }
}

export default Post