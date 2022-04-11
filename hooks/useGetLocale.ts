import { useRouter } from 'next/router'
import { LOCALE } from '../utils/constants'
import i18n from '../utils/i18n'

const useGetLocale = () => {
  const router = useRouter()
  const { locale } = router
  const translation = locale === LOCALE.en ? i18n.en : i18n.zh
  return translation
}

export default useGetLocale