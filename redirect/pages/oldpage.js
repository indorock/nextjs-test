import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Oldpage() {
  return (
    <div className={styles.container}>
      This is the OLD PAGE. You should not be here, you shold be in /newpage!
    </div>
  )
}
