import { useState } from "react"
import Image from 'next/image'

interface Props {
  onThemeToggle?: (isDark: boolean) => void
  className?: string
}

const Setting = ({ onThemeToggle, className }: Props) => {
  const [isDark, setIsDark] = useState(true)
  const handleThemeToggle = () => {
    if (onThemeToggle) onThemeToggle(!isDark)
    setIsDark(!isDark)
  }
  return (
    <div className={`${className} items-center gap-2`}>
      <Image src={isDark ? '/lightbulb-off.png' : '/lightbulb-on.png'} width="25" height="25" alt="lightbulb off" onClick={handleThemeToggle} className="cursor-pointer"/>
    </div>
  )
}

export default Setting