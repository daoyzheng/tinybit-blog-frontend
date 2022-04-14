import { GetServerSideProps } from "next"
import PostList from "../../../components/PostList"
import { TitleContainer } from "../../../components/styles/Title.styled"
import { IStrapiDataResponse } from "../../../interfaces/strapi"
import { ITag } from "../../../interfaces/tag"
import { getList } from "../../../utils/request"
import Custom404 from "../../404"

interface Props {
  tag: IStrapiDataResponse<ITag>
}

const Tag = ({ tag }: Props) => {
  return tag ? (
    <div>
      <TitleContainer>{tag.attributes.name} / posts</TitleContainer>
      <div className="mt-5">
        {tag.attributes.posts && tag.attributes.posts.data.length > 0 ?
          <PostList posts={tag.attributes.posts?.data} /> :
          <div className="text-xs italic">No related posts</div>
        }
      </div>
    </div>
  ) : <Custom404/>
}

export const getServerSideProps : GetServerSideProps = async (context) => {
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
  const res = await getList('api/tags', query)
  const tag = res.data.length > 0 ? res.data[0] : null
  return {
    props: {
      tag
    }
  }
}

export default Tag