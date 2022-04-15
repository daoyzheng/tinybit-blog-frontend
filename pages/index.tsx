import type { NextPage } from 'next'
import { getList } from '../utils/request'
import PostList from '../components/PostList'
import { IPostItem } from '../interfaces/post'
import { IStrapiDataResponse } from '../interfaces/strapi'
import { SubTitleContainer, TitleContainer } from '../components/styles/Title.styled'
import { descendingPublishDate } from '../utils/specifications'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <TitleContainer>Welcome to Tinybit Blog</TitleContainer>
      <div className="mt-6">
        <div>Hi, I&apos;m Dao. Here is my knowledge bank and where I keep my personal records. Explore more at Tinybit</div>
      </div>
      <SubTitleContainer className="mt-5">Recent posts</SubTitleContainer>
      <div className="mt-5">
        <PostList posts={posts} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const query = {
    sort: descendingPublishDate,
    pagination: {
      page: 1,
      pageSize: 3
    }
  }
  const posts = await getList<IPostItem>('api/posts', query)
  return {
    props: {
      posts: posts.data
    },
    revalidate: 10
  }
}

export default Home

