import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home</title>
          <meta name="description" content="Lennon Correa portifolio in NextJs" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Lennon Correa
          </h1>
          <h2>
            <a href="https://github.com/lennoncorrea/">Github</a>
          </h2>

          <p className={styles.description}>
            Jump right in{' '}
            <code className={styles.code}><Link href="/portfolio">here</Link></code>
          </p>
          <div className={styles.grid}>
            <a href="https://www.linkedin.com/in/lennoncorrea/" className={styles.card}>
              <h2>Linkedin &rarr;</h2>
              <p>Check it out my linkedin page and hit me up!</p>
            </a>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Contact me &rarr;</h2>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </a>
          </div>
        </main>
      </div>
    </>
  )
}

export default Home
