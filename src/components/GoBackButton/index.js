/** @format */

import {memo} from 'react'

import styles from './GoBackButton.module.css'

export const GoBackButton = memo(({onBack}) => (
  <button className={styles.button} type="button" onClick={onBack}>
    Go back
  </button>
))
