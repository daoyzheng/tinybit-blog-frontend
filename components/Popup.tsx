import { RefObject, SetStateAction, useEffect, useRef } from 'react'
import { PopupContainer } from './styles/Popup.styled'

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
        <div>{parent}</div>
        <PopupContainer showPopup={showPopup}>
          {children}
        </PopupContainer>
      </div>
    </div>
  )
}

export default Popup