import type { NextPage } from 'next'
import { getList } from '../utils/request'
import PostList from '../components/PostList'
import { IPostItem } from '../interfaces/post'
import { IStrapiDataResponse } from '../interfaces/strapi'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import useGetLocale from '../hooks/useGetLocale'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}

const Home: NextPage<Props> = ({ posts }) => {
  const locale = useGetLocale()
  return (
    <div>
      <div>{locale.title}</div>
      <div className="mt-6">
        {locale.welcomeMessage}
      </div>
      <div className="mt-5">Recent posts</div>
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

