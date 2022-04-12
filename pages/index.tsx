import type { NextPage } from 'next'
import { getList } from '../utils/request'
import PostList from '../components/PostList'
import { IPostItem } from '../interfaces/post'
import { IStrapiDataResponse } from '../interfaces/strapi'
import useGetLocale from '../hooks/useGetLocale'
import { SubTitle, Title } from '../components/styles/Title.styled'
import Link from 'next/link'
import { A } from '../components/styles/hyperlink.styled'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}

const Home: NextPage<Props> = ({ posts }) => {
  const locale = useGetLocale()
  return (
    <div>
      <div className="flex justify-between items-center">
        <Title>{locale.title}</Title>
        <div className="gap-2 flex">
          <Link href="/post" passHref>
            <A>Posts</A>
          </Link>
          <Link href="/tag" passHref>
            <A>Tags</A>
          </Link>
        </div>
      </div>
      <div className="mt-6">
        <div>{locale.welcomeMessage}</div>
      </div>
      <SubTitle className="mt-5">{locale.recentPosts}</SubTitle>
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

