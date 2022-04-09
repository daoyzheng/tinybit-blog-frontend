import Head from 'next/head'
import { LayoutContainer } from './styles/Layout.styled'

interface Props {
  setting?: React.ReactNode
}

const Layout : React.FC<Props> = ({ children, setting }) => {
  return (
    <LayoutContainer>
      <Head>
        <title>Tinybit Blog</title>
        <meta name="description" content="Tinybit blog of programming, web development, learning and other things in life" />
        <meta name="keywords" content="web development, programming, lifestyle" />
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
    </LayoutContainer>
  )
}

export default Layout