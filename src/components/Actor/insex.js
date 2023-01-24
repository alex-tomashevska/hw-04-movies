/** @format */

import {memo} from 'react'
import styles from './Actor.module.css'
import placeholder from '../../assets/images/placeholder.png'

export const Actor = memo(({photo, name, character}) => {
  const photoURL = photo ? `https://image.tmdb.org/t/p/w300${photo}` : placeholder;

  return (
    <div>
      <div className={styles.thumb}>
        <img src={photoURL} alt={name} className={styles.photo}/>
      </div>
      <p>
        <span>Character: </span>
        <b>{character}</b>
      </p>
    </div>
  )
})