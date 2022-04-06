import styles from '../styles/Layout.module.css'
import { ReactNode } from 'react'
import Head from 'next/head'

const Layout : React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tinybit Blog</title>
        <meta name="description" content="Tinybit blog of programming, web development, learning and other things in life" />
        <meta name="keywords" content="web development, programming, lifestyle" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-md w-full">
        <main>
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout