import Image from "next/image"

interface Props {
  isDark: boolean
}

const Copyright = ({ isDark }: Props) => {
  return (
    <div>
      <div className="text-xs">
        Copyright © 2022 Dao Yuan Zheng
      </div>
      <div className="mt-5">
        <a href="https://github.com/daoyzheng" target="_blank" rel="noreferrer">
          <Image src={isDark ? '/GitHub-Mark-dark.png' : '/GitHub-Mark-light.png'} width="20" height="20" alt="github"/>
        </a>
      </div>
    </div>
  )
}

export default Copyright