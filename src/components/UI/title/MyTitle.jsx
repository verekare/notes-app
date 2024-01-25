import React from 'react'
import styles from './MyTitle.module.css'

const MyTitle = ({style, children}) => {
  return (
    <h2 
    style={style}
    className={styles.myTitle}>
      {children}
    </h2>
  )
}

export default MyTitle
