import styles from "../styles/Home.module.css"
import Head from "next/head"

function profile() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Profile Page</a>
        </h1>
      </main>
    </div>
  )
}

export default profile;
