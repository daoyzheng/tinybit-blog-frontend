import { useEffect, useState } from "react"
import Image from 'next/image'
import Nav from "./Nav"

interface Props {
  onThemeToggle?: (isDark: boolean) => void
  className?: string
}

const Setting = ({ onThemeToggle, className }: Props) => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    const localStorageItem = window.localStorage.getItem('isDarkTheme')
    const isDarkTheme = localStorageItem ? JSON.parse(localStorageItem) : true
    setIsDark(isDarkTheme)
    if (onThemeToggle) onThemeToggle(isDarkTheme)
  }, [setIsDark, onThemeToggle])

  const handleThemeToggle = () => {
    if (onThemeToggle) onThemeToggle(!isDark)
    localStorage.setItem('isDarkTheme', JSON.stringify(!isDark))
    setIsDark(!isDark)
  }
  return (
    <div className={`${className} items-center gap-2`}>
      <Nav className="mt-1 mr-4"/>
      <Image src={isDark ? '/lightbulb-off.png' : '/lightbulb-on.png'} width="25" height="25" alt="lightbulb off" onClick={handleThemeToggle} className="cursor-pointer"/>
    </div>
  )
}

export default Setting