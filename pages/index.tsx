import type { NextPage } from 'next'
import { getList } from '../utils/request'
import PostList from '../components/PostList'
import { IPostItem } from '../interfaces/post'
import { IStrapiDataResponse } from '../interfaces/strapi'
import Checkbox from '../components/Checkbox'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useState } from 'react'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
}
const Home: NextPage<Props> = ({ posts }) => {
  const [isChecked, setIsChecked] = useState(true)
  const handleClick = (isChecked: boolean) => {
    setIsChecked(isChecked)
    console.log('lkj', isChecked)
  }

  return (
    <div>
      <div>Welcome to Tinybit Blog</div>
      <div className="mt-6">
        This is the author&apos;s knowledge bank and personal records. Want to know more about the author? Visit Tinybit
      </div>
      <div className="mt-5 flex justify-center space-x-4">
        <input className="appearance-none"/>
        <Checkbox label="Tech" onClick={handleClick}/>
        <Checkbox label="Personal" onClick={handleClick}/>
      </div>
      <div className="mt-5">
        {isChecked ? 'true' : 'false'}
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

