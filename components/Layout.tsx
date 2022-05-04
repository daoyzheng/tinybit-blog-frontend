import Head from 'next/head'
import Copyright from './Copyright'
import { LayoutContainer } from './styles/Layout.styled'

interface Props {
  setting?: React.ReactNode
  isDark: boolean
}

const Layout : React.FC<Props> = ({ children, setting, isDark }) => {
  return (
    <LayoutContainer>
      <Head>
        <title>Dao Zheng Blog</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content="Dao's blog of programming, web development, learning and other things in life" />
        <meta name="keywords" content="web development, programming, lifestyle" />
        <meta property="og:title" content="Dao Zheng Blog"/>
        <meta name="og:description" content="Dao's blog of programming, web development, learning and other things in life" />
        <meta property="og:url" content="https://daozheng.me/"/>
        <meta property="og:type" content="website"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>{setting}</div>
      <div className="flex w-full justify-center">
        <div className="max-w-screen-md w-full">
          <main>
            {children}
          </main>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="max-w-screen-md w-full mt-52">
          <Copyright isDark={isDark}/>
        </div>
      </div>
    </LayoutContainer>
  )
}

export default Layout