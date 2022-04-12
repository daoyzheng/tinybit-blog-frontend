import { IPostItem } from "../../../interfaces/post"
import { IStrapiDataResponse } from "../../../interfaces/strapi"
import { getList } from "../../../utils/request"
import { GetStaticPaths, GetServerSideProps } from 'next'
import Custom404 from "../../404"


interface Props {
  postDetails: IStrapiDataResponse<IPostItem>
}

const PostDetails = ({ postDetails }: Props) => {
  return postDetails ? (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div>Prev post</div>
        <div>Next post</div>
      </div>
      <div className="mt-6 text-center">
        {postDetails.attributes.title}
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