import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>KalDocs</title>
        <meta name="description" content="Documentation for Kalmai221's projects!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Welcome to KalDocs!
        </h1>
        <h3>
        Documentation for Kalmai221s projects
        </h3>
      </main>

      <footer className={styles.footer}>
      <b>Powered by KalAPI</b>
      </footer>
    </div>
  )
}
