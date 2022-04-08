import styles from '../styles/Popup.module.css'
import { MouseEventHandler, RefObject, SetStateAction, useEffect, useRef } from 'react'

interface Props {
  parent: React.ReactNode
  children: React.ReactNode
  showPopup: boolean
  setShowPopup: (value: SetStateAction<boolean>) => void
}


const Popup : React.FC<Props> = ({ children, parent, showPopup, setShowPopup }: Props) => {
  function useOutsideAlerter(ref : RefObject<HTMLInputElement>) {
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setShowPopup(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }, [ref])
  }
  const wrapperRef = useRef(null)
  useOutsideAlerter(wrapperRef)
  return (
    <div className="relative w-fit">
      <div ref={wrapperRef}>
        {parent}
        <div className={`${styles.popup} ${showPopup ? `${styles.opacityFull}` : `${styles.opacityZero}`}`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Popup