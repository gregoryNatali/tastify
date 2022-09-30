import { FC } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '@styles/Home.module.css'
// import styles from '../styles/login.css'

const Home: FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tastify | Spotify Stats</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Tastify Home Page!</div>
    </div>
  )
}

export default Home