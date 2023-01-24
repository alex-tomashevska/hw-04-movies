/** @format */

import {memo} from 'react'

import styles from './LoadMoreButton.module.css'

export const LoadMoreButton = memo(({onClick}) => (
    <div className={styles.wrapper}>
      <button className={styles.button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  )
)