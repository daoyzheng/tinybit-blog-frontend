import type { NextPage } from 'next'
import { getList } from '../utils/request'
import PostList from '../components/PostList'
import { IPostItem } from '../interfaces/post'
import { IStrapiDataResponse } from '../interfaces/strapi'
import useGetLocale from '../hooks/useGetLocale'
import { SubTitleContainer } from '../components/styles/Title.styled'
import Title from '../components/Titile'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}

const Home: NextPage<Props> = ({ posts }) => {
  const locale = useGetLocale()
  return (
    <div>
      <Title title={locale.title}/>
      <div className="mt-6">
        <div>{locale.welcomeMessage}</div>
      </div>
      <SubTitleContainer className="mt-5">{locale.recentPosts}</SubTitleContainer>
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

