import Link from "next/link"
import { useRouter } from "next/router"
import { A } from "./styles/hyperlink.styled"

interface Props {
  className?: string
}

const Nav = ({ className }: Props) => {
  const router = useRouter()
  const { pathname } = router
  return (
    <div className={`gap-4 flex items-center ${className}`}>
      { pathname !== '/' ?
        (<Link href="/" passHref>
          <A>Home</A>
        </Link>) : <></>}
      { pathname !== '/post' ?
        (<Link href="/post" passHref>
          <A>Posts</A>
        </Link>) : <></>}
      { pathname !== '/tag' ?
        (<Link href="/tag" passHref>
          <A>Tags</A>
        </Link>) : <></>}
    </div>
  )
}

export default Nav