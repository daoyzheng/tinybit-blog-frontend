import { NextPage } from "next"
import Link from "next/link"
import { useState } from "react"
import FilterIcon from "../../components/FilterIcon"
import Popup from "../../components/Popup"
import PostFilter from "../../components/PostFilter"
import PostList from "../../components/PostList"
import SortIcon from "../../components/SortIcon"
import { A } from "../../components/styles/hyperlink.styled"
import { SubTitle } from "../../components/styles/Title.styled"
import { ICategory } from "../../interfaces/category"
import { IPostItem } from "../../interfaces/post"
import { IStrapiDataResponse } from "../../interfaces/strapi"
import { ITag } from "../../interfaces/tag"
import { getList } from "../../utils/request"
import { descendingPublishDate, ascendingPublishDate } from '../../utils/specifications'

interface Props {
  posts: IStrapiDataResponse<IPostItem>[]
  categories: IStrapiDataResponse<ICategory>[]
  tags: IStrapiDataResponse<ITag>[]
}

const Post : NextPage<Props> = ({ posts, categories, tags }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [sort, setSort] = useState(descendingPublishDate)
  const handleFilterClick = () => {
    setShowPopup(!showPopup)
  }
  const handleSortClick = () => {
    if (sort[0] == descendingPublishDate[0]) {
      setSort(ascendingPublishDate)
      return
    }
    setSort(descendingPublishDate)
  }

  return (
    <div>
      <div className="flex justify-between items-center">
        <SubTitle>Posts</SubTitle>
        <div className="flex gap-3 items-center">
          <Link href="/" passHref>
            <A>Home</A>
          </Link>
          <Link href="/tag" passHref>
            <A>Tags</A>
          </Link>
        </div>
      </div>
      <div className="flex justify-end mt-8 items-center gap-3">
        <input/>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} parent={<FilterIcon className="cursor-pointer" onClick={handleFilterClick}/>}>
          <PostFilter availableCategories={categories} availableTags={tags}/>
        </Popup>
        <SortIcon onClick={handleSortClick}/>
      </div>
      <div className="mt-5">
        <PostList posts={posts} showDate/>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const query = {
    sort: descendingPublishDate
  }
  const [
    posts,
    categories,
    tags
  ] = await Promise.all([
    getList<IPostItem>('api/posts', query),
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