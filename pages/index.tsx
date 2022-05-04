import type { NextPage } from 'next'
import { getList } from '../utils/request'
import PostList from '../components/PostList'
import { IPostItem } from '../interfaces/post'
import { IStrapiDataResponse } from '../interfaces/strapi'
import { SubTitleContainer, TitleContainer } from '../components/styles/Title.styled'
import { descendingPublishDate } from '../utils/specifications'
import { A } from '../components/styles/hyperlink.styled'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <TitleContainer>Welcome to Dao&apos;s Blog</TitleContainer>
      <div className="mt-6">
        <div>Hi, I&apos;m Dao. Here is my knowledge bank and where I keep my personal records. Explore more at
          <A large={true} href="https://daozheng.me" target="_blank"> daozheng.me</A></div>
      </div>
      <SubTitleContainer className="mt-5">Recent posts</SubTitleContainer>
      { posts.length > 0 ? (<div className="mt-5">
        <PostList posts={posts} />
      </div>) : <div className="text-xs italic">No recent posts</div>}
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

