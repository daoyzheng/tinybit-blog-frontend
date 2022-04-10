import type { NextPage } from 'next'
import { getList } from '../utils/request'
import PostList from '../components/PostList'
import { IPostItem } from '../interfaces/post'
import { IStrapiDataResponse } from '../interfaces/strapi'
// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { ICategory } from '../interfaces/category'
import { ITag } from '../interfaces/tag'
import FilterIcon from '../components/FilterIcon'
import Popup from '../components/Popup'
import PostFilter from '../components/PostFilter'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
  categories: IStrapiDataResponse<ICategory>[]
  tags: IStrapiDataResponse<ITag>[]
}
const Home: NextPage<Props> = ({ posts, categories, tags }) => {
  const [showPopup, setShowPopup] = useState(false)
  const handleFilterClick = () => {
    setShowPopup(!showPopup)
  }
  return (
    <div>
      <div>Welcome to Tinybit Blog</div>
      <div className="mt-6">
        Hi, I&apos;m Dao. This is my knowledge bank and where I keep my personal records. Want to know more? Visit Tinybit
      </div>
      <div className="mt-10 flex justify-end items-center">
        <input className="mr-2"/>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} parent={<FilterIcon className="cursor-pointer" onClick={handleFilterClick}/>}>
          <PostFilter availableCategories={categories} availableTags={tags}/>
        </Popup>
      </div>
      <div className="mt-5">
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

