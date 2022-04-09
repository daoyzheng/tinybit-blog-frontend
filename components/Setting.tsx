import { useState } from "react"

interface Props {
  onToggle: (isDark: boolean) => void
  className?: string
}

const Setting = ({ onToggle, className }: Props) => {
  const [isDark, setIsDark] = useState(true)
  const handleOnClick = () => {
    onToggle(!isDark)
    setIsDark(!isDark)
  }
  return (
    <div className={className}>
      <button onClick={handleOnClick}>Toggle</button>
    </div>
  )
}

export default Setting