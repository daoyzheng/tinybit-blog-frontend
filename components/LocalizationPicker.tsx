import { useState } from "react"
import { LOCALE } from '../utils/constants'
import { Locale } from './styles/Locale.styled'

const LocalizationPicker = () => {
  const [locale, setLocale] = useState(LOCALE.en)
  const handleSetLocale = (selectedLocale: LOCALE) => {
    setLocale(selectedLocale)
  }
  return (
    <div className="flex items-center space-x-1">
      <Locale active={locale === LOCALE.en} onClick={() => handleSetLocale(LOCALE.en)}>English</Locale>
      <div>/</div>
      <Locale active={locale === LOCALE.zh} onClick={() => handleSetLocale(LOCALE.zh)}>中文</Locale>
    </div>
  )
}

export default LocalizationPicker