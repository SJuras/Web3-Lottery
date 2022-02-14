import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import 'bulma/css/bulma.css';

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Lottery Dapp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      {/* navbar */}
        <nav className="navbar mt-4 mb-4">
          <div className="container">
            <div className="navbar-brand">
                <h1 className="underline">Ether Lotter</h1>
            </div>
            <div className="navbar-end">
              <button className="button is-link">
                Connect Wallet
              </button>
            </div>
          </div>
        </nav>

        {/* main content */}
        <div className="container">
          <section>
            <h4>Lottery</h4>
            <h4>宝くじ</h4>
            <h4>лотерея</h4>
            <h4>लॉटरी</h4>
            <h4>վիճակախաղ</h4>
          </section>
          <section>
            <Link href="/lotterypage">
              To Lottery
            </Link>
            <button className="button">
              Learn More
            </button>
          </section>
        </div>
        {/* timestamp: 20:00 */}

      </main>

      <footer className={styles.footer}>
        <p>&copy; 2022 Lottery Dapp</p>
      </footer>
    </div>
  )
}
