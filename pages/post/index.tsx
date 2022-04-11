import { NextPage } from "next"
import { useState } from "react"
import FilterIcon from "../../components/FilterIcon"
import Popup from "../../components/Popup"
import PostFilter from "../../components/PostFilter"
import PostList from "../../components/PostList"
import { ICategory } from "../../interfaces/category"
import { IPostItem } from "../../interfaces/post"
import { IStrapiDataResponse } from "../../interfaces/strapi"
import { ITag } from "../../interfaces/tag"
import { getList } from "../../utils/request"

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
  categories: IStrapiDataResponse<ICategory>[]
  tags: IStrapiDataResponse<ITag>[]
}

const Post : NextPage<Props> = ({ posts, categories, tags }) => {
  const [showPopup, setShowPopup] = useState(false)
  const handleFilterClick = () => {
    setShowPopup(!showPopup)
  }
  return (
    <div>
      <div>Posts</div>
      <div className="flex justify-end items-center">
        <input className="mr-2"/>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} parent={<FilterIcon className="cursor-pointer" onClick={handleFilterClick}/>}>
          <PostFilter availableCategories={categories} availableTags={tags}/>
        </Popup>
      </div>
      <div className="mt-5">
        <PostList posts={posts} showDate/>
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

export default Post