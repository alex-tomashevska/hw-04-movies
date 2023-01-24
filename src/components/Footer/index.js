/** @format */

import {memo} from 'react'
import styles from './Footer.module.css'

export const Footer = memo(() => {
  return(
    <footer className={styles.footer}>
      <p className={styles.text}>
        {new Date().getFullYear()} Top movies
      </p>
    </footer>
  )
})