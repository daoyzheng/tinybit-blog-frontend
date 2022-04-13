import type { NextPage } from 'next'
import { getList } from '../utils/request'
import PostList from '../components/PostList'
import { IPostItem } from '../interfaces/post'
import { IStrapiDataResponse } from '../interfaces/strapi'
import { SubTitleContainer } from '../components/styles/Title.styled'
import Title from '../components/Titile'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Title title="Welcome to Tinybit Blog"/>
      <div className="mt-6">
        <div>Hi, I&apos;m Dao. Here is my knowledge bank and where I keep my personal records.</div>
      </div>
      <SubTitleContainer className="mt-5">Recent posts</SubTitleContainer>
      <div className="mt-5">
        <PostList posts={posts} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const posts = await getList<IPostItem>('api/posts')
  return {
    props: {
      posts: posts.data
    }
  }
}

export default Home

