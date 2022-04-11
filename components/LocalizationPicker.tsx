import { useEffect, useState } from "react"
import { LOCALE } from '../utils/constants'
import { Locale } from './styles/Locale.styled'
import { useRouter } from 'next/router'
import useGetLocale from "../hooks/useGetLocale"

interface Props {
  className: string
}

const LocalizationPicker = ({ className } : Props) => {
  const [locale, setLocale] = useState(LOCALE.en)
  const router = useRouter()
  const { locale: urlLocale } = router
  useEffect(() => {
    setLocale(urlLocale === LOCALE.en ? LOCALE.en : LOCALE.zh)
  }, [setLocale, urlLocale])
  const setCookie = (locale: string) => {
    document.cookie = `NEXT_LOCALE=${locale}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
  }
  const handleSetLocale = (selectedLocale: LOCALE) => {
    setLocale(selectedLocale)
    const { pathname, asPath, query } = router
    setCookie(selectedLocale.toString())
    // change just the locale and maintain all other route information including href's query
    router.push({ pathname, query }, asPath, { locale: selectedLocale })
  }
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      <Locale active={locale === LOCALE.en} onClick={() => handleSetLocale(LOCALE.en)}>English</Locale>
      <div>/</div>
      <Locale active={locale === LOCALE.zh} onClick={() => handleSetLocale(LOCALE.zh)}>中文</Locale>
    </div>
  )
}

export default LocalizationPicker