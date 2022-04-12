import Link from "next/link"
import { useRouter } from "next/router"
import useGetLocale from "../hooks/useGetLocale"
import { A } from "./styles/hyperlink.styled"


const Nav = () => {
  const locale = useGetLocale()
  const router = useRouter()
  const { pathname } = router
  return (
    <div className="gap-2 flex items-center">
      { pathname !== '/' ?
        (<Link href="/" passHref>
          <A>{locale.home}</A>
        </Link>) : <></>}
      { pathname !== '/post' ?
        (<Link href="/post" passHref>
          <A>{locale.posts}</A>
        </Link>) : <></>}
      { pathname !== '/category' ?
        (<Link href="/category" passHref>
          <A>{locale.categories}</A>
        </Link>) : <></>}
    </div>
  )
}

export default Nav