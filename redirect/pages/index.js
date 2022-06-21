import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h2>next/link compnents</h2>
      <ul>
        <li><Link href="/oldpage">Should redirect to /newpage</Link></li>
        <li><Link href="/fakepage">Should also redirect to /newpage</Link></li>
      </ul>
      <h2>Anchor tag</h2>
      <ul>
        <li><a href="/oldpage">Should redirect to /newpage</a></li>
        <li><a href="/fakepage">Should also redirect to /newpage</a></li>
      </ul>
    </div>
  )
}
