import Image from "next/image"
import { useState } from "react"
import { IStrapiDataResponse } from "../interfaces/strapi"
import { IUpvote } from "../interfaces/upvote"
import { UpvoteWrapper } from "./styles/Upvote.styled"

interface Props {
  className?: string
  upvote: IStrapiDataResponse<IUpvote>
  onClick?: (upvotes: number, upvoteId: number) => void
  isClickable?: boolean
  dense?: boolean
}

const Upvote = ({ className, upvote, onClick, isClickable=false, dense=true }: Props) => {
  const doneClickingInterval = 800
  const [clickingTimer, setClickingTimer] = useState<ReturnType<typeof setTimeout>>()
  const [newUpvotes, setNewUpvotes] = useState(Number(upvote.attributes.count))
  const countTimer = () => {
    if (isClickable) {
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
    <div className={`${className} flex items-center gap-1 w-fit`} >
      <UpvoteWrapper className={`flex items-center ${isClickable ? 'cursor-pointer' : ''}`} onClick={() => countTimer()}>
        <Image src="/heart.png" alt="like" width={dense ? '15' : '20'} height={dense ? '15' : '20'} />
      </UpvoteWrapper>
      <div className="text-xs">{newUpvotes}</div>
    </div>
  ) : <></>
}

export default Upvote