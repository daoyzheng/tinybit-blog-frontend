import styles from '../styles/Checkbox.module.css'
import { ChangeEvent } from 'react'
interface Props {
  label: string
  name: string
  onChange: (value: string, name: string, checked: boolean) => void
  defaultChecked?: boolean
}

const Checkbox = ({ label, name, onChange, defaultChecked }: Props) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value, e.target.name, e.target.checked)
  }
  return (
  <label className={styles.container}>
    {label}
    <input type="checkbox" name={name} value={label} onChange={handleOnChange} defaultChecked={defaultChecked}/>
    <span className={styles.checkmark}></span>
  </label>
  )
}

export default Checkbox