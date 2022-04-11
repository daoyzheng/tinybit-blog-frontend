// import { useRouter } from 'next/router'
const PostDetails = () => {
  // const router = useRouter()
  // const { slug } = router.query
  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <div>Prev post</div>
        <div>Next post</div>
      </div>
      <div className="mt-6 text-center">
        {/* hleo {slug} */}
      </div>
    </div>
  )
}

// export const getServerSideProps = async (context) => {
//   // const res = await
// }

export default PostDetails