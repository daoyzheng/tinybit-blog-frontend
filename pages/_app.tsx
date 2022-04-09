import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import Theme from '../components/Theme'
import Setting from '../components/Setting'
import { useState } from 'react'
import { THEME } from '../utils/constants'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(THEME.dark)

  const themeToggler = (isDark: boolean) => {
    isDark ? setTheme(THEME.dark) : setTheme(THEME.light)
  }

  return (
    <Theme theme={theme}>
      <Layout setting={<Setting onToggle={themeToggler} className="mb-16 flex justify-end lg:mr-72"/>}>
        <Component {...pageProps} />
      </Layout>
    </Theme>
  )
}

export default MyApp
