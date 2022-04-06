import type { NextPage } from 'next'
import { getList } from '../utils/request'
import PostList from '../components/PostList'
import { IPostItem } from '../interfaces/post'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

interface Props {
  posts: IPostItem[]
}

const Home: NextPage<Props> = ({ posts }) => {
  console.log('klj', posts)
  return (
    <div>
      <div>Welcome to Tinybit Blog</div>
      <div className="mt-6">
        Interested? Visit Tinybit
      </div>
      <div className="mt-5 flex justify-between">
        <div className="cursor-pointer">Tech</div>
        <div className="cursor-pointer">Personal</div>
      </div>
      <div className="mt-4">
        {/* <PostList posts={posts} */}
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

