/** @format */

import {memo} from 'react'
import {NavLink} from "react-router-dom";

import styles from './Navigation.module.css'

export const Navigation = memo(() => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <NavLink to="/home" className={styles.link}>
            Home
          </NavLink>
        </li>
        
        <li>
          <NavLink to="/movies" className={styles.link}>
            Movies
          </NavLink>
        </li>
      </ul>
      <p className={styles.title}> Top movies</p>
            
    </nav>
  )
})