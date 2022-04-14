import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Theme from '../components/Theme'
import Setting from '../components/Setting'
import { useState } from 'react'
import { THEME } from '../utils/constants'

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, setIsDark] = useState(false)
  const [theme, setTheme] = useState(THEME.dark)

  const themeToggler = (isDark: boolean) => {
    setIsDark(isDark)
    isDark ? setTheme(THEME.dark) : setTheme(THEME.light)
  }

  return (
    <Theme theme={theme}>
      <Layout isDark={isDark} setting={<Setting onThemeToggle={themeToggler} className="mb-6 flex justify-end lg:mr-72"/>}>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  )
}

export default MyApp
