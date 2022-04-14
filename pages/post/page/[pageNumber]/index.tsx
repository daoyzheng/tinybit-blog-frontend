import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router"
import { useState } from "react"
import PostList from "../../../../components/PostList"
import { Pagination } from "../../../../components/styles/Pagination.styled"
import { TitleContainer } from "../../../../components/styles/Title.styled"
import { ICategory } from "../../../../interfaces/category"
import { IPostItem } from "../../../../interfaces/post"
import { IStrapiDataResponse } from "../../../../interfaces/strapi"
import { ITag } from "../../../../interfaces/tag"
import { getList } from "../../../../utils/request"
import { descendingPublishDate, ascendingPublishDate } from '../../../../utils/specifications'

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
  return (
    <div>
      <TitleContainer>Posts</TitleContainer>
      {posts && posts.length > 0 ? (
        <>
          <div className="mt-5">
            <PostList posts={posts} showDate/>
          </div>
          <div className="flex items-center justify-center gap-2 flex-wrap break-all mt-20">
            {Array.from({length: pageCount}, (_, i) => i + 1).map(pageNumber =>
              <Pagination key={pageNumber} active={pageNumber == currentPage} onClick={() => handlePageClick(pageNumber)}>{pageNumber}</Pagination>
            )}
          </div>
        </>
        ) : <div className="text-xs italic">No posts</div>
      }
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) return {props: {posts: [], pageCount: 0}}
  const currentPage = context.params.pageNumber
  const query = {
    sort: descendingPublishDate,
    pagination: {
      page: currentPage,
      pageSize: 1,
      withCount: true
    }
  }
  const [
    posts,
  ] = await Promise.all([
    getList<IPostItem>('api/posts', query),
  ])
  const { pageCount } = posts.meta.pagination
  return {
    props: {
      posts: posts.data,
      pageCount,
      currentPage
    }
  }
}

export default Post