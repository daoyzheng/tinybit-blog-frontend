import Link from "next/link";
import { A } from "../components/styles/hyperlink.styled";

export default function Custom404() {
  return (
    <div>
      <div className="mt-4 space-x-2 flex items-center">
        <div>opps, nothing is here,</div>
        <Link href="/" passHref>
          <A>go home</A>
        </Link>
      </div>
    </div>
  )
}