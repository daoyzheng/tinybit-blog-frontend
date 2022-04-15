import Image from "next/image"
import { useState } from "react"
import { IStrapiDataResponse } from "../interfaces/strapi"
import { IUpvote } from "../interfaces/upvote"

interface Props {
  className?: string
  upvote: IStrapiDataResponse<IUpvote>
  onClick?: (upvotes: number, upvoteId: number) => void
}

const Upvote = ({ className, upvote, onClick }: Props) => {
  const doneClickingInterval = 800
  const [clickingTimer, setClickingTimer] = useState<ReturnType<typeof setTimeout>>()
  const [newUpvotes, setNewUpvotes] = useState(Number(upvote.attributes.count))
  const countTimer = () => {
    if (onClick) {
      setNewUpvotes(newUpvotes + 1)
      if (clickingTimer) clearTimeout(clickingTimer)
      const timer = setTimeout(handleOnClick, doneClickingInterval)
      setClickingTimer(timer)
    }
  }

  const handleOnClick = () => {
    onClick && onClick(newUpvotes + 1, upvote.id)
  }
  return upvote.attributes.count > 0 || onClick ? (
    <div className={`${className} flex items-center gap-1 w-fit`} onClick={() => countTimer()}>
      <Image src="/heart.png" alt="like" width="20" height="20" />
      <div className="text-xs">{newUpvotes}</div>
    </div>
  ) : <></>
}

export default Upvote