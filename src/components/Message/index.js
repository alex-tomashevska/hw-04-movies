/** @format */

import {memo} from 'react'
import styles from './Message.module.css'

export const Message = memo(({children}) =>(
    <div className={styles.message}>
      {children}
    </div>
  )
)