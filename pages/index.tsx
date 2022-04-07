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
import { ICategory } from '../interfaces/category'
import { ITag } from '../interfaces/tag'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
  categories: IStrapiDataResponse<ICategory>[]
  tags: IStrapiDataResponse<ITag>[]
}
const Home: NextPage<Props> = ({ posts, categories, tags }) => {
  const [isChecked, setIsChecked] = useState(false)
  const handleClick = () => {
    setIsChecked(!isChecked)
    console.log('lkj', isChecked)
  }
  console.log('tags', tags)
  return (
    <div>
      <div>Welcome to Tinybit Blog</div>
      <div className="mt-6">
        This is the author&apos;s knowledge bank and personal records. Want to know more about the author? Visit Tinybit
      </div>
      <div className="mt-5 flex justify-center">
        <div className="flex space-x-1">
          <input className="appearance-none"/>
          {categories.map(category =>
            <Checkbox label={category.attributes.name} key={category.id} onChange={handleClick} checked={isChecked}/>
          )}
        </div>
      </div>
      <div className="mt-5">
        {isChecked ? 'true' : 'false'}
        <PostList posts={posts} />
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const [
    posts,
    categories,
    tags
  ] = await Promise.all([
    getList<IPostItem>('api/posts'),
    getList<ICategory>('api/categories'),
    getList<ITag>('api/tags')
  ])
  return {
    props: {
      posts: posts.data,
      categories: categories.data,
      tags: tags.data
    }
  }
}

export default Home

