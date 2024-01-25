import React from 'react'
import styles from './MyBtn.module.css'

const MyBtn = ({ children, ...props}) => {
  return (
    <button 
      {...props}  
      className={styles.btn} 
    >
        <strong>{children}</strong>
    </button>
  )
}

export default MyBtn
