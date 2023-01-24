/** @format */

import {memo} from 'react'

import styles from './MoviePreview.module.css'
import placeholder from '../../assets/images/placeholder.png'

export const MoviePreview = memo(({title, poster, vote}) => {
  const posterUrl = poster ? `https://image.themoviedp.org/t/p/w500${poster}` : placeholder;
  return (
   <div className={styles.card}>
    <div className={styles.thumb}>
      <img
        className={styles.card}
        src={posterUrl}
        alt={title}
        title={title}
     />
    </div>
    
    <p className={styles.text}>
     {title}
    </p>
    
   </div>
   )
})