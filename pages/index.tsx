import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

import FormApp from '../src/components/form/FormApp'
import ModalApp from '../src/components/modal/ModalApp'
import Footer from '../src/components/footer/footer'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  const [modalShow, setModalShow] = useState(false);
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
            <a href="#" className={styles.card} onClick={() => setModalShow(true)}>
              <h2>Contact me &rarr;</h2>
              <p>My inbox is always open just get in touch.</p>
            </a>
          </div>
        </main>
        <Footer />
      </div>
      <ModalApp title="Contact Me" body={<FormApp onHide={() => setModalShow(false)} />} show={modalShow} onHide={() => setModalShow(false)} />
    </>
  )
}

export default Home
