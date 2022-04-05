import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <div>Welcome to Tinybit Blog</div>
      <div className="mt-6">
        Interested? Visit Tinybit
      </div>
      <div className="mt-5 flex justify-between">
        <div className="cursor-pointer">Development</div>
        <div className="cursor-pointer">Life</div>
      </div>
      <div className="mt-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sit dolore perspiciatis aliquam velit odit? Asperiores, facere, sunt architecto nulla perspiciatis omnis assumenda consectetur in ad quisquam, reprehenderit doloremque. Non.</div>
    </div>
  )
}

export default Home
