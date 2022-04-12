import Link from "next/link"
import { useRouter } from "next/router"
import { A } from "./styles/hyperlink.styled"


const Nav = () => {
  const router = useRouter()
  const { pathname } = router
  return (
    <div className="gap-2 flex items-center">
      { pathname !== '/' ?
        (<Link href="/" passHref>
          <A>Home</A>
        </Link>) : <></>}
      { pathname !== '/post' ?
        (<Link href="/post" passHref>
          <A>Posts</A>
        </Link>) : <></>}
      { pathname !== '/category' ?
        (<Link href="/category" passHref>
          <A>Categories</A>
        </Link>) : <></>}
      { pathname !== '/tag' ?
        (<Link href="/tag" passHref>
          <A>Tags</A>
        </Link>) : <></>}
    </div>
  )
}

export default Nav