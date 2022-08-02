import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const a = '';
  return (
    <div className={styles.container}>
      <Head>
        <title>Nextjs App - Clean Architecture Tdd Boilerplate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}></main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
