import { GetStaticProps } from "next"
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
      <TitleContainer>{category.attributes.name} / posts</TitleContainer>
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

export const getStaticProps: GetStaticProps = async (context) => {
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
  const res = await getList<ICategory>('api/categories', query)
  const category = res.data.length > 0 ? res.data[0] : null
  return {
    props: {
      category
    },
    revalidate: 10
  }
}

export const getStaticPaths = async () => {
  const query = {
    populate: {
      posts: {
        populate: ['tags', 'category']
      }
    },
  }
  const res = await getList<ICategory>('api/categories', query)
  const slugs = res.data.map(category => category.attributes.slug)
  const paths = slugs.map(slug => ({ params: {slug: slug}}))
  return {
    paths,
    fallback: false
  }

}