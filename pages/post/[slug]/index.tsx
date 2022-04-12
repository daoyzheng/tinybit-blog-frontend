import { IPostItem } from "../../../interfaces/post"
import { IStrapiDataResponse } from "../../../interfaces/strapi"
import { getList } from "../../../utils/request"
import { GetStaticPaths, GetServerSideProps } from 'next'
import Custom404 from "../../404"
import TagIcon from "../../../components/TagIcon"
import Title from "../../../components/Titile"


interface Props {
  postDetails: IStrapiDataResponse<IPostItem>
}

const PostDetails = ({ postDetails }: Props) => {
  return postDetails ? (
    <div>
      <Title title={postDetails.attributes.title}/>
      <div className="mt-6 break-all">{postDetails.attributes.content}</div>
      <div className="flex items-center gap-1 flex-wrap mt-10">
        <div>Tags: </div>
        <div className="flex gap-1 items-center flex-wrap">
          {postDetails.attributes.tags.data.map(tag => <TagIcon key={tag.id} tag={tag}/>)}
        </div>
      </div>
    </div>
  ) : <Custom404/>
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { locale, params } = context
  let slug = ''
  if (params) slug = params.slug as string
  const query = {
    filters: {
      slug: {
        $eq: slug
      },
      locale: {
        $eq: locale
      }
    }
  }
  const post = await getList('api/posts/', query)
  const postDetails = post.data.length > 0 ? post.data[0] : null
  return {
    props: {
      postDetails
    }
  }
}

export default PostDetails