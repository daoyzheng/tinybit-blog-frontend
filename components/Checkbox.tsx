import styles from '../styles/Checkbox.module.css'
import { useState } from 'react'
interface Props {
  label: string
  onClick: (isChecked: boolean) => void
}

const Checkbox = ({ label, onClick }: Props) => {
  const [isChecked, setIsChecked] = useState(true);
  const handleClick = () => {
    setIsChecked(!isChecked)
    onClick(isChecked)
  }
  return (
  <label className={styles.container}>
    {label}
    <input type="checkbox" checked={isChecked} onChange={handleClick}/>
    <span className={styles.checkmark}></span>
  </label>
  )
}

export default Checkbox