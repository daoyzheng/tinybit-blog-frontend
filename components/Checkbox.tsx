import styles from '../styles/Checkbox.module.css'
import { ChangeEvent } from 'react'
interface Props {
  label: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  checked: boolean
}

const Checkbox = ({ label, onChange, checked }: Props) => {
  return (
  <label className={styles.container}>
    {label}
    <input type="checkbox" checked={checked} onChange={onChange}/>
    <span className={styles.checkmark}></span>
  </label>
  )
}

export default Checkbox