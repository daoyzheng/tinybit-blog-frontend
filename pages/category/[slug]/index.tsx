import { GetServerSideProps } from "next"
import PostList from "../../../components/PostList"
import { TitleContainer } from "../../../components/styles/Title.styled"
import { ICategory } from "../../../interfaces/category"
import { IStrapiDataResponse } from "../../../interfaces/strapi"
import { getList } from "../../../utils/request"
import Custom404 from "../../404"

interface Props {
  category: IStrapiDataResponse<ICategory>
}

const Category = ({ category }: Props) => {
  return category ? (
    <div>
      <TitleContainer>{category.attributes.name}</TitleContainer>
      <div className="mt-5">
        {category.attributes.posts && category.attributes.posts.data.length > 0 ?
          <PostList posts={category.attributes.posts?.data} /> :
          <div className="text-xs italic">No related posts</div>
        }
      </div>
    </div>
  ) : <Custom404 />
}
export default Category

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) return { props: {}}
  const slug = context.params.slug
  const query = {
    populate: {
      posts: {
        populate: ['tags', 'category']
      }
    },
    filters: {
      slug: {
        $eq: slug
      }
    }
  }
  const res = await getList('api/categories', query)
  const category = res.data.length > 0 ? res.data[0] : null
  return {
    props: {
      category
    }
  }
}