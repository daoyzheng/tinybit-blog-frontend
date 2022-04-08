import { MouseEventHandler } from 'react'
import styles from '../styles/FilterIcon.module.css'

interface Props {
  className: string
  onClick: () => void
}
const FilterIcon = ({ className, onClick } : Props) => {
  return (
    <div className={`${className} ${styles.container}`} onClick={onClick}>
      <div className={styles.vertLine}>
        <div className={`${styles.horLine} ${styles.horLine1}`}></div>
      </div>
      <div className={styles.vertLine}>
        <div className={`${styles.horLine} ${styles.horLine2}`}></div>
      </div>
      <div className={styles.vertLine}>
        <div className={`${styles.horLine} ${styles.horLine3}`}></div>
      </div>
    </div>
  )
}

export default FilterIcon