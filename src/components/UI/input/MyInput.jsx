import React, {forwardRef} from 'react';
import styles from './MyInput.module.css'

const MyInput = forwardRef( function MyInput(props, ref) {
  return (
    <textarea 
        {...props}
        ref={ref}
        className={styles.myInput}
    />
  )
})

export default MyInput;
